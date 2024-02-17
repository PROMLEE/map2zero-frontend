import React from 'react';
import StoreInfo from './StoreInfo';
import { StoreInfoDummy } from './Dummy/StoreDummy';
import HomeSlider from './Slider/HomeSlider';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const BookMark = () => {
  const navigate = useNavigate();
  const onClickStore = () => {
    navigate('');
  };
  return (
    <Container onClick={onClickStore}>
      <HomeSlider type="bookmark" />
    </Container>
  );
};

export default BookMark;
const Container = styled.div`
  background-color: aliceblue;
  width: 80%;
  height: 72.3rem;
  border-bottom: 0.5px solid var(--light-gray, #f2f2f2);
  @media (max-width: 768px) {
    width: 100%;
    height: 125.5rem;
  }
`;
