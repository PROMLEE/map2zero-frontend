import styled from 'styled-components';
import { Event } from '../StoreDetail';

export const Eventlist = () => {
  const eventlist = [
    {
      event: '진행중인 이벤트명',
      start: '2024.01.18',
      end: '2024.01.18',
      url: `${process.env.PUBLIC_URL}/assets/Navbar/logo.png`,
      code: 123451,
    },
    {
      event: '진행중인 이벤트명',
      start: '2024.01.18',
      end: '2024.01.18',
      url: `${process.env.PUBLIC_URL}/assets/Navbar/logo.png`,
      code: 123452,
    },
    {
      event: '진행중인 이벤트명',
      start: '2024.01.18',
      end: '2024.01.18',
      url: `${process.env.PUBLIC_URL}/assets/Navbar/logo.png`,
      code: 123453,
    },
    {
      event: '진행중인 이벤트명',
      start: '2024.01.18',
      end: '2024.01.18',
      url: `${process.env.PUBLIC_URL}/assets/Navbar/logo.png`,
      code: 123454,
    },
    {
      event: '진행중인 이벤트명',
      start: '2024.01.18',
      end: '2024.01.18',
      url: `${process.env.PUBLIC_URL}/assets/Navbar/logo.png`,
      code: 123455,
    },
    {
      event: '진행중인 이벤트명',
      start: '2024.01.18',
      end: '2024.01.18',
      url: `${process.env.PUBLIC_URL}/assets/Navbar/logo.png`,
      code: 123456,
    },
    {
      event: '진행중인 이벤트명',
      start: '2024.01.18',
      end: '2024.01.18',
      url: `${process.env.PUBLIC_URL}/assets/Navbar/logo.png`,
      code: 123457,
    },
    {
      event: '진행중인 이벤트명',
      start: '2024.01.18',
      end: '2024.01.18',
      url: `${process.env.PUBLIC_URL}/assets/Navbar/logo.png`,
      code: 123458,
    },
  ];
  return (
    <SellingBox>
      <EventTitle>진행중인 이벤트</EventTitle>
      <Products>
        {eventlist.map((item, index) => {
          return <Event {...item} key={index} />;
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
`;
const EventTitle = styled.div`
  color: #000;
  font-family: 'Noto Sans KR';
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const Products = styled.div`
  display: flex;
  width: 92.4rem;
  height: 25rem;
  overflow-x: scroll;
  overflow-y: hidden;
  gap: 1.6rem;
  margin-top: 1.6rem;
`;
