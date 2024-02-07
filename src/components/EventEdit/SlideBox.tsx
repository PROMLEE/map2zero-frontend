import styled from 'styled-components';
import { Product, SlidePic } from '.';

const productlist = [
  {
    product: '진행중인 이벤트명',
    date: '기간',
    imgurl: `${process.env.PUBLIC_URL}/assets/Navbar/logo.png`,
    code: 1234,
  },
  {
    product: '진행중인 이벤트명',
    date: '기간',
    imgurl: `${process.env.PUBLIC_URL}/assets/Navbar/logo.png`,
    code: 12345,
  },
  {
    product: '진행중인 이벤트명',
    date: '기간',
    imgurl: `${process.env.PUBLIC_URL}/assets/Navbar/logo.png`,
    code: 12346,
  },
  {
    product: '진행중인 이벤트명',
    date: '기간',
    imgurl: `${process.env.PUBLIC_URL}/assets/Navbar/logo.png`,
    code: 12347,
  },
  {
    product: '진행중인 이벤트명',
    date: '기간',
    imgurl: `${process.env.PUBLIC_URL}/assets/Navbar/logo.png`,
    code: 12348,
  },
  {
    product: '진행중인 이벤트명',
    date: '기간',
    imgurl: `${process.env.PUBLIC_URL}/assets/Navbar/logo.png`,
    code: 12349,
  },
  {
    product: '진행중인 이벤트명',
    date: '기간',
    imgurl: `${process.env.PUBLIC_URL}/assets/Navbar/logo.png`,
    code: 123410,
  },
];

export const Item = () => {
  return (
    <SlidePic>
      {[...Array(2)].map((item, index) => (
        <div key={index}>
          <List>
            {productlist.map((item, index) => {
              return <Product {...item} key={index} />;
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
