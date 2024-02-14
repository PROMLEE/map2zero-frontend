import React from 'react';
import Items from './Items';
import { ItemDummy } from './Dummy/ItemDummy';
import { useRecoilValue } from 'recoil';
import { TodayState } from '../../recoil/Home/HomeState';

const Today = () => {
  const Todayinfo = useRecoilValue(TodayState);
  console.log(Todayinfo);
  return <Items info={Todayinfo.data} />;
};

export default Today;
