import React from 'react';
import styled from 'styled-components';
import { AdItemType } from '../Dummy/AdDummy';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReactComponent as ArrowIcon } from '../../../assets/Home/arrow.svg';

const BaseSliderItem = ({ item }: { item: any }) => {
  const ImgURL = item.photo?.url ? item.photo.url : `${process.env.PUBLIC_URL}/assets/MyPage/lightgray.png`;

  return (
    <>
      <ImgWrap>
        <img src={ImgURL} alt={item.name} />
        <Promotation>{item.summary}</Promotation>
        <Arrow>
          <CustomArrowIcon fill={'#ffffff'} alt={'화살표'} />
        </Arrow>
      </ImgWrap>
    </>
  );
};

export default BaseSliderItem;

const ImgWrap = styled.div`
  position: relative;
  img {
    height: 56rem;
    width: 100%;
    @media (max-width: 768px) {
      width: 100%;
      height: 93.75rem;
    }
  }
  /* 이미지 위에 그라데이션 추가 */
  &::after {
    content: '';
    position: absolute;
    top: 49rem;
    left: 0;
    right: 0;
    bottom: 0.2rem;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
    z-index: 1;
  }

  @media (max-width: 768px) {
    &::after {
      top: 79rem;
    }
  }
`;

const Promotation = styled.p`
  color: #fff;
  font-weight: 600;
  position: absolute;
  bottom: 3.6rem;
  font-size: 1.8rem;
  left: 2.4rem;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 4.5rem;
    bottom: 4.6rem;
    left: 6rem;
  }
`;
const Arrow = styled.div`
  z-index: 2;
  position: absolute;
  bottom: 3.6rem;
  right: 2.4rem;
  @media (max-width: 768px) {
    bottom: 5rem;
    right: 6rem;
  }
`;

const CustomArrowIcon = styled(ArrowIcon)`
  width: 3rem;
  height: 2rem;
  @media (max-width: 768px) {
    width: 8em;
    height: 6rem;
  }
`;
