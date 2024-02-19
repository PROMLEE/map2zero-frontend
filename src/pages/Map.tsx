import { useEffect, useState } from 'react';
import { MarkerInfo, Mobiletop, Gpsbutton } from '../components';
import { renderToString } from 'react-dom/server';
import styled from 'styled-components';
import Markers from '../apis/Map/Markers';

export const Map = () => {
  const [myLocation, setMyLocation] = useState<{ latitude: number; longitude: number }>({
    latitude: 37.5601,
    longitude: 126.996,
  });
  const gpsbutton = renderToString(<Gpsbutton />);
  let map: any = null;
  const initMap = async (myLocation: { latitude: number; longitude: number }) => {
    map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(myLocation.latitude, myLocation.longitude),
      zoom: 16,
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

    const datas = await Markers(myLocation);
    for (let i = 0; i < datas.data.length; i++) {
      const strinnng = renderToString(<MarkerInfo {...datas.data[i]} />);
      const marker = new naver.maps.Marker({
        map: map,
        position: new naver.maps.LatLng(datas.data[i].y, datas.data[i].x),
        // icon: {
        //   url: `${process.env.PUBLIC_URL}/assets/Map/marker.svg`,
        //   scaledSize: new naver.maps.Size(35, 35),
        //   size: new naver.maps.Size(35, 35),
        // },
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
          // for (let i = 0; i < markers.length; i++) {
          //   markers[i].setIcon({
          //     url: `${process.env.PUBLIC_URL}/assets/Map/marker.svg`,
          //     scaledSize: new naver.maps.Size(35, 35),
          //     size: new naver.maps.Size(35, 35),
          //   });
          // }
          map.panTo(e.coord);
          // markers[i].setIcon({
          //   url: `${process.env.PUBLIC_URL}/assets/Map/marker.svg`,
          //   scaledSize: new naver.maps.Size(50, 50),
          //   size: new naver.maps.Size(50, 50),
          // });
          infowindows[i].open(map, markers[i]);
          naver.maps.Event.once(map, 'click', function () {
            for (let i = 0; i < markers.length; i++) {
              if (infowindows[i].getMap()) {
                // markers[i].setIcon({
                //   url: `${process.env.PUBLIC_URL}/assets/Map/marker.svg`,
                //   scaledSize: new naver.maps.Size(35, 35),
                //   size: new naver.maps.Size(35, 35),
                // });
                infowindows[i].close();
              }
            }
          });
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

    naver.maps.Event.once(map, 'init', function () {
      var customControl = new naver.maps.CustomControl(gpsbutton, {
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
      <Mobiletop pagename="지도" />
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
