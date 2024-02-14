import React, { useEffect, useState } from 'react';
import StoreInfo from './StoreInfo';
import { useRecoilValue } from 'recoil';
import { NearestState } from '../../recoil/Home/HomeState';

const Nearest = () => {
  const [myLocation, setMyLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const NearestInfo = useRecoilValue(NearestState(myLocation));

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });

        console.log(myLocation);
      });
    } else {
      window.alert('현재위치를 알수 없습니다.');
    }
  }, []);

  if (!NearestInfo) {
    return <div>Loading...</div>;
  }

  return <StoreInfo info={NearestInfo.data} />;
};

export default Nearest;
