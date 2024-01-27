import { useEffect } from 'react';
import { MarkerInfo } from '../components';
import { renderToString } from 'react-dom/server';

export const Map = () => {
  const strinnng = renderToString(<MarkerInfo />);

  let map: any = null;
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
    const infowindows: naver.maps.InfoWindow[] = [];

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
      infowindows.push(
        new naver.maps.InfoWindow({
          content: strinnng,
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          disableAnchor: false,
          anchorColor: 'transparent',
          position: new naver.maps.Point(0, 0).add(10, 10),
        }),
      );
      markers.push(marker);
    }
    for (let i = 0; i < markers.length; i++) {
      naver.maps.Event.addListener(markers[i], 'click', function (e) {
        if (infowindows[i].getMap()) {
          infowindows[i].close();
        } else {
          infowindows[i].open(map, markers[i]);
        }
      });
    }
    // 마커 표시 함수
    const showMarker = (map: naver.maps.Map, marker: naver.maps.Marker) => {
      marker.setMap(map);
    };
    // 마커 숨김 함수
    const hideMarker = (marker: naver.maps.Marker) => {
      marker.setMap(null);
    };
    // 마커 업데이트 유/무 판별 함수
    const updateMarkers = (map: naver.maps.Map, markers: naver.maps.Marker[]) => {
      const mapBounds: any = map.getBounds();
      for (let i = 0; i < markers.length; i++) {
        const position = markers[i].getPosition();
        if (mapBounds.hasLatLng(position)) {
          showMarker(map, markers[i]);
        } else {
          hideMarker(markers[i]);
        }
      }
    };
    // 지도 줌 인/아웃 시 마커 업데이트 이벤트 핸들러
    naver.maps.Event.addListener(map, 'zoom_changed', () => {
      if (map !== null) {
        updateMarkers(map, markers);
      }
    });
    // 지도 드래그 시 마커 업데이트 이벤트 핸들러
    naver.maps.Event.addListener(map, 'dragend', () => {
      if (map !== null) {
        updateMarkers(map, markers);
      }
    });
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
