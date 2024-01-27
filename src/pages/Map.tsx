import { useEffect, useState } from 'react';
import { MarkerInfo } from '../components';
import { renderToString } from 'react-dom/server';
import styled from 'styled-components';

export const Map = () => {
  const [myLocation, setMyLocation] = useState<{ latitude: number; longitude: number }>({ latitude: 0, longitude: 0 });
  const strinnng = renderToString(<MarkerInfo />);

  let map: any = null;
  const initMap = (myLocation: { latitude: number; longitude: number }) => {
    map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(myLocation.latitude, myLocation.longitude),
      zoom: 13,
      disableKineticPan: false,
      scaleControl: false,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.RIGHT_CENTER,
      },
      logoControl: true, // 로고 컨트롤러
      logoControlOptions: {
        position: naver.maps.Position.BOTTOM_LEFT,
      },
    });
    // 마커들이 담겨있는 배열
    const markers: naver.maps.Marker[] = [];
    const infowindows: naver.maps.InfoWindow[] = [];

    for (let i = 1; i < 20; i++) {
      const marker = new naver.maps.Marker({
        map: map,
        position: new naver.maps.LatLng(37.4758514 + i / 100, 126.9544896 + i / 100),
        icon: {
          url: `${process.env.PUBLIC_URL}/assets/Map/marker.svg`,
          scaledSize: new naver.maps.Size(35, 35),
          size: new naver.maps.Size(35, 35),
          origin: new naver.maps.Point(0, 0),
          anchor: new naver.maps.Point(25, 26),
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
          map.panTo(e.coord);
          infowindows[i].open(map, markers[i]);
          for (let i = 0; i < markers.length; i++) {
            naver.maps.Event.once(map, 'click', function () {
              if (infowindows[i].getMap()) {
                infowindows[i].close();
              }
            });
          }
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
    var locationBtnHtml =
      '<a href="#" ><img src="/assets/Map/Gps.svg" style="width:4rem; margin-bottom:42vh; margin-right:0.5rem;"/></a>';

    naver.maps.Event.once(map, 'init', function () {
      var customControl = new naver.maps.CustomControl(locationBtnHtml, {
        position: naver.maps.Position.RIGHT_BOTTOM,
      });
      customControl.setMap(map);
      naver.maps.Event.addDOMListener(customControl.getElement(), 'click', function () {
        map.setCenter(new naver.maps.LatLng(myLocation.latitude, myLocation.longitude));
      });
    });

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
  useEffect(() => {
    if (typeof myLocation !== 'string') {
      initMap(myLocation);
    }
  }, [myLocation]);

  const mapStyle = {
    width: '100vw',
    height: '130vh',
  };
  return (
    <MapWrap>
      <NavMap id="map" style={mapStyle} />
    </MapWrap>
  );
};

const NavMap = styled.div``;
const MapWrap = styled.div`
  position: fixed;
  height: 100vh;
  overflow: hidden;
`;
