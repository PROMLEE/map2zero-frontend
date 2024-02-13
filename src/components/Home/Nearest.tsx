import React, { useEffect, useState } from 'react';
import StoreInfo from './StoreInfo';
import { StoreInfoDummy } from './Dummy/StoreDummy';
import { useRecoilValue } from 'recoil';
import { NearestState } from '../../recoil/Home/HomeState';

const Nearest = () => {
  const [myLocation, setMyLocation] = useState<{ latitude: number; longitude: number }>({ latitude: 0, longitude: 0 });
  const Nearest = useRecoilValue(NearestState(myLocation));
  console.log(Nearest);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      window.alert('현재위치를 알수 없습니다.');
    }
  }, []);

  return <StoreInfo info={StoreInfoDummy} />;
};

export default Nearest;
