import styled from 'styled-components';
import { Item } from '../SellingProduct';

export const DefaultList = () => {
  return (
    <ProductBox>
      <Item />
    </ProductBox>
  );
};
const ProductBox = styled.div`
  width: 92.4rem;
  flex-wrap: wrap;
  margin-bottom: 11rem;
  @media (max-width: 768px) {
    width: 100%;
    overflow: hidden;
  }
`;
