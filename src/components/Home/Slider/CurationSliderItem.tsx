import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import { ReactComponent as ArrowIcon } from '../../../assets/Home/arrow.svg';

const CurationSliderItem = ({ item, dragging }: { item: any; dragging: boolean }) => {
  const [ImgURL, setImgURL] = useState(`${process.env.PUBLIC_URL}/assets/MyPage/lightgray.png`);

  const onClickStore = () => {
    !dragging && window.open(item.url);
  };
  useEffect(() => {
    const handleImgSize = () => {
      if (window.innerWidth <= 768) {
        setImgURL(item.mobile_photo?.url || `${process.env.PUBLIC_URL}/assets/MyPage/lightgray.png`);
      } else {
        setImgURL(item.photo?.url || `${process.env.PUBLIC_URL}/assets/MyPage/lightgray.png`);
      }
    };
    handleImgSize();
    // 윈도우 리사이즈 이벤트에 핸들러 등록
    window.addEventListener('resize', handleImgSize);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => window.removeEventListener('resize', handleImgSize);
  }, [item.photo, item.mobilephoto]);

  return (
    <>
      <ImgWrap onClick={onClickStore}>
        <img src={ImgURL} alt={item.title} />
        <InfoWrap>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </InfoWrap>
        <Arrow>
          <CustomArrowIcon fill={'#ffffff'} alt={'화살표'} />
        </Arrow>
      </ImgWrap>
    </>
  );
};

export default CurationSliderItem;
const ImgWrap = styled.div`
  position: relative;
  background-color: rgb(218, 218, 218);
  cursor: pointer;
  > img {
    height: 55rem;
    margin: 0 auto;
    @media (max-width: 768px) {
      height: 140rem;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 20rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
    z-index: 1;
  }
  @media (max-width: 768px) {
    &::after {
      top: 60rem;
    }
  }
`;

const InfoWrap = styled.div`
  white-space: pre-wrap;
  bottom: 7rem;
  left: 10%;
  width: 80%;
  z-index: 2;
  position: absolute;
  > h1 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    color: #fff;

    @media (max-width: 768px) {
      font-size: 5rem;
      margin-bottom: 2.5rem;
    }
  }
  > p {
    font-size: 1.5rem;
    color: #fff;
    line-height: 140%;
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 768px) {
    left: 6rem;
    bottom: 16rem;
  }
`;

const Arrow = styled.div`
  z-index: 2;
  position: absolute;
  bottom: 7rem;
  right: 3rem;
  @media (max-width: 768px) {
    bottom: 12rem;
  }
`;

const CustomArrowIcon = styled(ArrowIcon)`
  width: 4rem;
  height: 3rem;
  @media (max-width: 768px) {
    width: 8em;
    height: 6rem;
  }
`;
