import styled from 'styled-components';
import { Product, SlidePic, ProductManage } from '.';
import { productManage } from '../../recoil';
import { useRecoilValue } from 'recoil';

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
  const isOwner = useRecoilValue(productManage);
  return (
    <SlidePic>
      {[...Array(8)].map((item, index) => (
        <div key={index}>
          <List>
            {productlist.map((item, index) => {
              return isOwner ? <ProductManage {...item} key={index} /> : <Product {...item} key={index} />;
            })}
          </List>
        </div>
      ))}
    </SlidePic>
  );
};

const List = styled.div`
  display: flex;
  overflow: visible;
  flex-wrap: wrap;
  width: 92.4rem;
  gap: 2.4rem;
  padding-bottom: 10rem;
  @media (max-width: 768px) {
    width: 100%;
    gap: 2%;
  }
`;
