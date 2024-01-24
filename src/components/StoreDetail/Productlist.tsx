import styled from 'styled-components';
import { Product } from './Product';
export const Productlist = () => {
  const productlist = [
    {
      product: '제품명',
      price: '가격',
      code: 1234,
    },
    {
      product: '제품명',
      price: '가격',
      code: 12345,
    },
    {
      product: '제품명',
      price: '가격',
      code: 12346,
    },
    {
      product: '제품명',
      price: '가격',
      code: 12347,
    },
    {
      product: '제품명',
      price: '가격',
      code: 12348,
    },
    {
      product: '제품명',
      price: '가격',
      code: 12349,
    },
    {
      product: '제품명',
      price: '가격',
      code: 123410,
    },
  ];

  return (
    <SellingBox>
      <Title>
        <LeftText>
          <SellingTitle>판매중인 제품</SellingTitle>
          <SellingCount>(30)</SellingCount>
        </LeftText>
        <RightText>전체보기</RightText>
      </Title>
      <Products>
        {productlist.slice(0, 6).map((item, index) => {
          return <Product {...item} key={index} />;
        })}
      </Products>
    </SellingBox>
  );
};

const SellingBox = styled.div`
  width: 92.4rem;
  display: flex;
  margin-top: 4rem;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 90%;
    margin-top: 6rem;
  }
`;
const Title = styled.div`
  display: flex;
  height: 2.2rem;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
    height: 5.5rem;
  }
`;
const LeftText = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  @media (max-width: 768px) {
    gap: 0.4rem;
  }
`;

const SellingTitle = styled.div`
  color: #000;
  font-family: 'Noto Sans KR';
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;
const SellingCount = styled.div`
  color: #848484;
  font-family: 'Noto Sans KR';
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const RightText = styled.div`
  color: #565656;
  font-family: 'Noto Sans KR';
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Products = styled.div`
  margin-top: 1.6rem;
  gap: 4%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    margin-top: 4rem;
  }
`;
