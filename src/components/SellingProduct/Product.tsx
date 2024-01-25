import styled from 'styled-components';

interface Props {
  product: string;
  price: string;
  imgurl: string;
  code: number;
}
export const Product = ({ product, price, imgurl, code }: Props) => {
  return (
    <Box>
      <ProductImg src={imgurl} alt={product} />
      <ProductName>{product}</ProductName>
      <ProductPrice>{price}</ProductPrice>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 21.2rem;
  height: 26.7rem;
  align-items: flex-start;
  border-radius: 0.8rem;
  border: 0.5px solid #f2f2f2;
  /* @media (max-width: 768px) {
    gap: 0rem;
    width: 100%;
    padding: 4rem;
    flex-direction: row;
    justify-content: space-between;
    height: 11.5rem;
  } */
`;
const ProductImg = styled.img`
  width: 21.2rem;
  height: 21.2rem;
  background-color: #d9d9d9;
  border-radius: 0.8rem 0.8rem 0 0;
`;

const ProductName = styled.div`
  padding-left: 0.8rem;
  padding-top: 0.8rem;
  color: #000;
  font-family: 'Noto Sans KR';
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;
const ProductPrice = styled.div`
  padding-left: 0.8rem;
  padding-top: 0.8rem;
  height: 1.2rem;
  align-self: stretch;
  color: #000;
  font-family: 'Noto Sans KR';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;
