import styled from 'styled-components';
import { Product, SlidePic, TabContents } from '.';

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
    <ProductBox>
      <SlidePic>
        {['ACTIVE', 'INACTIVE'].map((item, index) => (
          <div key={index}>
            <TabContents status={item} />
          </div>
        ))}
      </SlidePic>
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
