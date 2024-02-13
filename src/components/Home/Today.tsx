import React from 'react';
import Items from './Items';
import { ItemDummy } from './Dummy/ItemDummy';
import { useRecoilValue } from 'recoil';
import { TodayState } from '../../recoil/Home/HomeState';

const Today = () => {
  const Todayinfo = useRecoilValue(TodayState);
  return <Items info={ItemDummy} />;
};

export default Today;
