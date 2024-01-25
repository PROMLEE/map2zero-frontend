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
  gap: 2.4rem;
  flex-wrap: wrap;
`;
