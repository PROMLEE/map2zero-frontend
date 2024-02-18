import React from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReactComponent as ArrowIcon } from '../../../assets/Home/arrow.svg';
import { useNavigate } from 'react-router-dom';

const BaseSliderItem = ({ item, dragging }: { item: any; dragging: boolean }) => {
  const ImgURL = item.photo?.url ? item.photo.url : `${process.env.PUBLIC_URL}/assets/MyPage/lightgray.png`;
  const navigate = useNavigate();
  const onClickStore = () => {
    !dragging && navigate(`/store/${item.id}`);
  };

  return (
    <ImgWrap onClick={onClickStore}>
      <img src={ImgURL} alt={item.name} />
      <Promotation>{item.summary}</Promotation>
      <Arrow>
        <CustomArrowIcon fill={'#ffffff'} alt={'화살표'} />
      </Arrow>
    </ImgWrap>
  );
};

export default BaseSliderItem;

const ImgWrap = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;
  background-color: rgb(218, 218, 218);
  img {
    height: 55rem;
    margin: 0 auto;
    /* width: 100%; */
    @media (max-width: 768px) {
      height: 93.75rem;
    }
  }
  /* 이미지 위에 그라데이션 추가 */
  &::after {
    content: '';
    position: absolute;
    top: 30rem;
    left: 0;
    right: 0;
    bottom: 0rem;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
  }

  @media (max-width: 768px) {
    &::after {
      top: 50rem;
    }
  }
`;

const Promotation = styled.p`
  color: #fff;
  width: 80%;
  position: absolute;
  bottom: 5rem;
  font-size: 1.4rem;
  left: 4rem;
  z-index: 2;
  line-height: 140%;
  @media (max-width: 768px) {
    font-size: 2.4rem;
    bottom: 10rem;
    width: 75%;
    left: 6rem;
  }
`;
const Arrow = styled.div`
  z-index: 2;
  position: absolute;
  bottom: 5rem;
  right: 4rem;
  @media (max-width: 768px) {
    bottom: 10rem;
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
