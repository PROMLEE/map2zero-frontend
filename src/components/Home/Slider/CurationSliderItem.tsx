import React from 'react';
import styled from 'styled-components';
import { AdItemType } from '../Dummy/AdDummy';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CurationSliderItem = ({ item }: { item: any }) => {
  const ImgURL = item.photo?.url ? item.photo.url : `${process.env.PUBLIC_URL}/assets/MyPage/lightgray.png`;

  return (
    <>
      <ImgWrap>
        <img src={ImgURL} alt={item.title} />
        <InfoWrap>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </InfoWrap>
      </ImgWrap>
    </>
  );
};

export default CurationSliderItem;

const ImgWrap = styled.div`
  position: relative;
  > img {
    height: 56rem;
    width: 100%;
    @media (max-width: 768px) {
      height: 140rem;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 49rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
    z-index: 1;
  }
  @media (max-width: 768px) {
    &::after {
      top: 60rem;
    }
  }
`;

const InfoWrap = styled.div`
  bottom: 7rem;
  left: 20%;
  z-index: 2;
  position: absolute;
  > h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #fff;
    @media (max-width: 768px) {
      font-size: 5rem;
      margin-bottom: 2.5rem;
    }
  }
  > p {
    font-size: 1.6rem;
    color: #fff;
    @media (max-width: 768px) {
      font-size: 4rem;
    }
  }
  @media (max-width: 768px) {
    left: 6rem;
    bottom: 16rem;
  }
`;
