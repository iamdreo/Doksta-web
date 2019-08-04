import React from 'react';
import { useSelector } from 'react-redux';
import { previewProduct } from '../actions';
import { Rating, Button, Icon } from 'semantic-ui-react';
import useFetch from './useFetch';
import styled from 'styled-components';

/**
|--------------------------------------------------
| preview post before adding it to product
|--------------------------------------------------
*/

/**
 *  @method {preview}
 * @param {array} props '
 * @returns product preview before submission
 */

const Preview = props => {
  const id = props.match.params.id;
  const product = useSelector(state => state.products.preview);
  const preview = product.filter(item => item.id === id);
  useFetch(previewProduct(id));

  return (
    <div>
      {preview.map(item => (
        <div key={item.id}>
          <GridRow>
            <Image src={item.image} />
            <GridColumn>
              <ProductName>{item.name}</ProductName>
              <CategoryText>Men's Basketball Shoes</CategoryText>
              <CategoryText>{item.category}</CategoryText>
              <Rating icon="star" defaultRating={4} maxRating={5} />
              <ProductDescriptionTitle>
                Smooth leather texture
              </ProductDescriptionTitle>
              <ProductDescription>{item.description}</ProductDescription>
              <GridRow>
                <Button animated="vertical" color="orange" circular>
                  <Button.Content hidden>Shop</Button.Content>
                  <Button.Content visible>
                    <Icon name="shop" />
                  </Button.Content>
                </Button>
                <Button animated="fade" color="orange" circular>
                  <Button.Content hidden>Like</Button.Content>
                  <Button.Content visible>
                    <Icon name="heart" />
                  </Button.Content>
                </Button>
              </GridRow>

              <PriceText>${item.price}</PriceText>
            </GridColumn>
          </GridRow>
        </div>
      ))}
    </div>
  );
};

export default Preview;

const Image = styled.img`
  width: 500px;
  height: 600px;
`;
const ProductName = styled.h1`
  font-size: 3em;
`;

const CategoryText = styled.p`
  font-size: 1.2em;
  font-weight: bold;
`;

const ProductDescriptionTitle = styled(CategoryText)`
  text-transform: uppercase;
  margin-top: 30px;
`;

const ProductDescription = styled.p`
  font-size: 1em;
  font-weight: lighter;
`;
const GridRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`;
const GridColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;

const PriceText = styled.h3`
  text-align: center;
  font-size: 2em;
  margin-top: 50px;
`;
