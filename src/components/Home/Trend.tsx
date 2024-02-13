import React from 'react';
import StoreInfo from './StoreInfo';
import { StoreInfoDummy } from './Dummy/StoreDummy';
import { TrendState } from '../../recoil/Home/HomeState';
import { useRecoilValue } from 'recoil';

const Trend = () => {
  const TrendInfo = useRecoilValue(TrendState);
  return <StoreInfo info={StoreInfoDummy} />;
};

export default Trend;
