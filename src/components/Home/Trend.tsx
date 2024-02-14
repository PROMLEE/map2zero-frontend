import React from 'react';
import StoreInfo from './StoreInfo';
import { StoreInfoDummy } from './Dummy/StoreDummy';
import { TrendState } from '../../recoil/Home/HomeState';
import { useRecoilValue } from 'recoil';

const Trend = () => {
  const TrendInfo = useRecoilValue(TrendState);
  console.log('트랜드', TrendInfo.data[0]);
  return <StoreInfo info={TrendInfo.data[0]} />;
};

export default Trend;
