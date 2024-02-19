import styled from 'styled-components';

interface Props {
  name: string;
  price: string;
  photo: { url: string };
}
export const Product = ({ name, price, photo }: Props) => {
  return (
    <Box>
      <ProductImg src={photo.url} alt={name} />
      <ProductName>{name}</ProductName>
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
  @media (max-width: 768px) {
    margin-bottom: 4rem;
    width: 49%;
    height: 51.5rem;
  }
`;
const ProductImg = styled.img`
  width: 21.2rem;
  height: 21.2rem;
  background-color: #d9d9d9;
  border-radius: 0.8rem 0.8rem 0 0;
  @media (max-width: 768px) {
    width: 100%;
    height: 37.75rem;
  }
`;

const ProductName = styled.div`
  padding-left: 0.8rem;
  padding-top: 0.8rem;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media (max-width: 768px) {
    padding-left: 2rem;
    padding-top: 2rem;
    font-size: 3rem;
  }
`;
const ProductPrice = styled.div`
  padding: 0.8rem;
  height: 1.2rem;
  align-self: stretch;
  color: #000;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 768px) {
    padding: 2rem;
    font-size: 2.5rem;
  }
`;
