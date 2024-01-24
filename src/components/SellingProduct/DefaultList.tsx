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
  /* margin: 0 auto 0 auto; */
  width: 100%;
  gap: 2.4rem;
  flex-wrap: wrap;
`;
