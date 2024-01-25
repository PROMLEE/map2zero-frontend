import styled from 'styled-components';
import { Product, SlidePic } from '../SellingProduct';

const productlist = [
  {
    product: '제품명',
    price: '가격',
    imgurl: `${process.env.PUBLIC_URL}/assets/Navbar/logo.png`,
    code: 1234,
  },
  {
    product: '제품명',
    price: '가격',
    imgurl: `${process.env.PUBLIC_URL}/assets/Navbar/logo.png`,
    code: 12345,
  },
  {
    product: '제품명',
    price: '가격',
    imgurl: `${process.env.PUBLIC_URL}/assets/Navbar/logo.png`,
    code: 12346,
  },
  {
    product: '제품명',
    price: '가격',
    imgurl: `${process.env.PUBLIC_URL}/assets/Navbar/logo.png`,
    code: 12347,
  },
  {
    product: '제품명',
    price: '가격',
    imgurl: `${process.env.PUBLIC_URL}/assets/Navbar/logo.png`,
    code: 12348,
  },
  {
    product: '제품명',
    price: '가격',
    imgurl: `${process.env.PUBLIC_URL}/assets/Navbar/logo.png`,
    code: 12349,
  },
  {
    product: '제품명',
    price: '가격',
    imgurl: `${process.env.PUBLIC_URL}/assets/Navbar/logo.png`,
    code: 123410,
  },
];

export const Item = () => {
  return (
    <SlidePic>
      {[...Array(6)].map((item) => (
        <SliderItem key={item}>
          <List>
            {productlist.map((item, index) => {
              return <Product {...item} key={index} />;
            })}
          </List>
        </SliderItem>
      ))}
    </SlidePic>
  );
};

const SliderItem = styled.div``;
const List = styled.div`
  display: flex;
  overflow: scroll;
  flex-wrap: wrap;
  width: 92.4rem;
  gap: 2.4rem;
  @media (max-width: 768px) {
    width: 100%;
    gap: 2%;
  }
`;
