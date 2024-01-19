import styled from 'styled-components';

interface Props {
  product: string;
  price: string;
  code: number;
}
export const Product = ({ product, price, code }: Props) => {
  return (
    <Box>
      <ProductName>{product}</ProductName>
      <ProductPrice>{price}</ProductPrice>
    </Box>
  );
};

const Box = styled.div`
  width: 48%;
  height: 7rem;
  display: flex;
  padding: 1.6rem;
  gap: 0.8rem;
  flex-direction: column;
  border-bottom: 0.5px solid;
  border-color: #f2f2f2;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    gap: 0rem;
    width: 100%;
    padding: 4rem;
    flex-direction: row;
    justify-content: space-between;
    height: 11.5rem;
  }
`;
const ProductName = styled.div`
  color: #000;
  font-family: 'Noto Sans KR';
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;
const ProductPrice = styled.div`
  color: var(--dark-gray, #565656);
  font-family: 'Noto Sans KR';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;
