import React, { useCallback, useEffect, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import StoreInfo from './StoreInfo';
import { useRecoilValue } from 'recoil';
import { NearestState } from '../../recoil/Home/HomeState';
import BaseSliderItem from './Slider/BaseSliderItem';
import styled from 'styled-components';

const Nearest = () => {
  const [myLocation, setMyLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const NearestInfo = useRecoilValue(NearestState(myLocation));
  const [dragging, setDragging] = useState<boolean>(false);
  const handleBeforeChange = useCallback(() => {
    setDragging(true);
  }, []);
  const handleAfterChange = useCallback(() => {
    setDragging(false);
  }, []);
  const settings: Settings = {
    touchThreshold: 30,
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots: any) => (
      <Customdot>
        <ul> {dots} </ul>
      </Customdot>
    ),
    dotsClass: 'dots_custom',
  };
  const ItemGroup = ({ item }: any) => (
    <>
      <BaseSliderItem item={item} dragging={dragging} />
      <StoreInfo item={item} />
    </>
  );

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

  if (!NearestInfo) {
    return <div>Loading...</div>;
  }

  return (
    <SliderWrap>
      <StyledSlider {...settings}>
        <ItemGroup key={NearestInfo.data.id} item={NearestInfo.data} />
      </StyledSlider>
    </SliderWrap>
  );
};

export default Nearest;

const SliderWrap = styled.div`
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledSlider = styled(Slider)`
  .dots_custom {
    display: inline-block;
    vertical-align: middle;
    bottom: 2rem;

    @media (max-width: 768px) {
      bottom: 2rem;
    }
  }

  .dots_custom li {
    cursor: pointer;
    display: inline-block;
  }

  .dots_custom li button {
    width: 7rem;
    height: 0.3rem;
    background: rgba(255, 255, 255, 0.3);
    color: transparent;
    cursor: pointer;
    @media (max-width: 768px) {
      width: 6rem;
      height: 1rem;
    }
  }

  .dots_custom li.slick-active button {
    background-color: #fff;
    border-radius: 0.8rem;
  }

  .slick-prev::before {
    font-size: 30px !important;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  .slick-next::before {
    font-size: 30px !important;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
  .slick-prev {
    left: 4rem !important;
    z-index: 1;

    @media (max-width: 768px) {
    }
  }

  .slick-next {
    right: 4rem !important;
    @media (max-width: 768px) {
    }
    z-index: 1;
  }

  .slick-track {
    width: 100%;
    @media (max-width: 768px) {
      height: 140rem;
    }
  }
`;

const Customdot = styled.div`
  position: absolute;
  width: 100%;
  bottom: 2.4rem;
  text-align: center;
  @media (max-width: 768px) {
    bottom: 6rem;
  }
`;
