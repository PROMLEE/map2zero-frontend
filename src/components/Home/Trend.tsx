import React from 'react';
import StoreInfo from './StoreInfo';
import { StoreInfoDummy } from './Dummy/StoreDummy';
import { TrendState } from '../../recoil/Home/HomeState';
import { useRecoilValue } from 'recoil';
import AdSlider from './Slider/HomeSlider';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import HomeSlider from './Slider/HomeSlider';

const Trend = () => {
  const navigate = useNavigate();
  const onClickStore = () => {
    navigate('');
  };
  return (
    <Container onClick={onClickStore}>
      <HomeSlider type="trend" />
    </Container>
  );
};

export default Trend;
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
