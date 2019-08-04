import axios from 'axios';
import { history } from '../App';

export const addProduct = product => {
  return dispatch => {
    console.log(product);
    dispatch({
      type: 'ADD_PRODUCT',
      payload: product
    });
    history.push(`/preview/${product.id}`);
  };
};

export const fetchProducts = () => {
  return dispatch => {
    return axios
      .get(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
      .then(res => {
        dispatch({
          type: 'FETCH_PRODUCTS',
          payload: res.data
        });
      })
      .catch(error => {
        dispatch({
          type: 'ERROR',
          payload: error
        });
      });
  };
};

export const fetchProduct = id => {
  return dispatch => {
    return axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        dispatch({
          type: 'FETCH_PRODUCT',
          payload: res.data
        });
      })
      .catch(error => {
        dispatch({
          type: 'ERROR',
          payload: error
        });
      });
  };
};

export const previewProduct = id => {
  return dispatch => {
    dispatch({
      type: 'PREVIEW_PRODUCT',
      payload: id
    });
  };
};
