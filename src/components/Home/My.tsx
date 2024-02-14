import React from 'react';
import { ItemDummy } from './Dummy/ItemDummy';
import Items from './Items';
import { useRecoilValue } from 'recoil';
import { MyState } from '../../recoil/Home/HomeState';

const My = () => {
  const MyInfo = useRecoilValue(MyState);
  return <Items info={MyInfo.data} />;
};

export default My;
