import React from 'react';
import styled from 'styled-components';
import { AdItemType } from '../../Dummy/AdDummy';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderItem = ({ item }: { item: AdItemType }) => {
  return (
    <>
      <ImgWrap>
        <img src={item.img} alt={item.title} />
      </ImgWrap>
      <InfoWrap>
        <h1>{item.title}</h1>
        <p>{item.date}</p>
      </InfoWrap>
    </>
  );
};

export default SliderItem;

const ImgWrap = styled.div`
  position: relative;
  img {
    height: 59.6rem;

    width: 100%;
    @media (max-width: 768px) {
      /* width: 100%;
      height: 93.75rem; */
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
`;

const InfoWrap = styled.div`
  position: absolute;
  bottom: 7rem;
  margin-left: 50rem;
  z-index: 2;

  > h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #fff;
  }
  > p {
    font-size: 1.6rem;
    color: #fff;
  }
`;
