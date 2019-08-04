import React from 'react';
import { useSelector } from 'react-redux';
import { fetchProducts } from '../actions';
import { Link } from 'react-router-dom';
import useFetch from './useFetch';

/**
|--------------------------------------------------
| code to fetch products - used json placeholder found out 
fetching api wasnt part of task
|--------------------------------------------------
*/

const Products = () => {
  const products = useSelector(state => state.products.products);

  useFetch(fetchProducts());

  if (products.length === 0) {
    return <div>loading products...</div>;
  }
  return (
    <>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`product/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/addproduct">Add a product</Link>
    </>
  );
};

export default Products;
