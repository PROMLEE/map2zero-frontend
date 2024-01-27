import { useEffect } from 'react';

export const Map = () => {
  let map = null;
  const initMap = () => {
    map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(37, 127.039573),
      zoom: 13,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.RIGHT_CENTER,
      },
    });
    // 마커들이 담겨있는 배열
    const markers: naver.maps.Marker[] = [];

    for (let i = 1; i < 20; i++) {
      const marker = new naver.maps.Marker({
        map: map,
        position: new naver.maps.LatLng(37 + i / 100, 127.039573 + i / 100),
        icon: {
          url: `${process.env.PUBLIC_URL}/assets/Map/marker.svg`,
          scaledSize: new naver.maps.Size(35, 35),
          // size: new naver.maps.Size(35, 35),
          // origin: new naver.maps.Point(0, 0),
          // anchor: new naver.maps.Point(25, 26),
        },
      });
      markers.push(marker);
    }
  };
  useEffect(() => {
    initMap();
  }, []);

  const mapStyle = {
    width: '100%',
    height: '90%',
  };

  return (
    <>
      <div id="map" style={mapStyle} />
    </>
  );
};
