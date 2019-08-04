import React from 'react';
import { useSelector } from 'react-redux';
import { fetchProduct } from '../actions';
import { Link } from 'react-router-dom';
import useFetch from './useFetch';

/**
|--------------------------------------------------
| code to fetch products - used json placeholder found out 
fetching api wasnt part of task
|--------------------------------------------------
*/
const Product = props => {
  const id = props.match.params.id;
  const product = useSelector(state => state.products.product);
  useFetch(fetchProduct(id));

  return (
    <div>
      <Link to="/addproduct">Add a product</Link>
      <p>{product.title}</p>
      <p>{product.body}</p>
    </div>
  );
};

export default Product;
