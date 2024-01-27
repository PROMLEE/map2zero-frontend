import { useEffect } from 'react';

export const Map = () => {
  useEffect(() => {
    let map = null;
    let marker = null;
    const initMap = () => {
      map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(37, 127.039573),
        zoom: 13,
      });
      marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(37, 127.039573),
        map: map,
        icon: {
          content: `
            <img alt="marker" src={vectorIcon} /> //마커에 사용할 이미지
          `,
        },
      });
    };
    initMap();
  }, []);

  const mapStyle = {
    width: '100%',
    height: '100%',
  };

  return (
    <>
      <div id="map" style={mapStyle} />
    </>
  );
};
