import React, { useState } from 'react';
import uuid from 'uuid/v4';
import { useDispatch } from 'react-redux';
import { addProduct } from '../actions/index';
import { Form, Segment } from 'semantic-ui-react';
import styled from 'styled-components';

const ProductAdd = () => {
  const [products, setProducts] = useState({
    name: '',
    description: '',
    price: 0,
    category: '',
    image: '',
    color: ''
  });
  const dispatch = useDispatch();

  const addProducts = product => dispatch(addProduct(product));

  const handleSubmit = e => {
    const { name, description, price, category, image, color } = products;

    e.preventDefault();

    addProducts({
      id: uuid(),
      name: name,
      description: description,
      price: price,
      category: category,
      image: image,
      color: color
    });
  };

  const handleChange = e => {
    setProducts({ ...products, [e.target.id]: e.target.value });
  };

  const { name, description, price, category, image, color } = products;
  return (
    <div>
      <CenterForm>
        <BannerText>Add a product</BannerText>
        <Segment inverted>
          <Form onSubmit={handleSubmit}>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                type="text"
                id="name"
                placeholder="add the name of the product"
                value={name}
                onChange={handleChange}
                required
              />
              <Form.Input
                fluid
                type="text"
                id="description"
                placeholder="add the description of the product"
                value={description}
                onChange={handleChange}
                required
              />
              <Form.Input
                fluid
                type="number"
                id="price"
                placeholder="add the price of the product"
                value={price}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                type="text"
                id="category"
                placeholder="add the category of the product"
                value={category}
                onChange={handleChange}
                required
              />
              <Form.Input
                fluid
                type="text"
                id="image"
                placeholder="Enter url of your product image"
                value={image}
                onChange={handleChange}
                required
              />
              <Form.Input
                fluid
                type="text"
                id="color"
                placeholder="add the color of the product"
                value={color}
                onChange={handleChange}
                required
              />
              <Form.Button type="submit">Submit</Form.Button>
            </Form.Group>
          </Form>
        </Segment>
      </CenterForm>
    </div>
  );
};

export default ProductAdd;

const CenterForm = styled.div`
  padding: 20%;
`;

const BannerText = styled.h1`
  text-align: center;
`;
