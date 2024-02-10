import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { StoreInfoDummyType } from './Dummy/StoreDummy';
import { ReactComponent as ArrowIcon } from '../../assets/Home/arrow.svg';

const StoreInfo = ({ info }: { info: StoreInfoDummyType }) => {
  const navigate = useNavigate();
  const onClickStore = () => {
    navigate('');
  };

  return (
    <Container onClick={onClickStore}>
      <ImgWrap>
        <img src={info.img} alt={info.name} />
        <Promotation>{info.promotion}</Promotation>
        <Arrow>
          <CustomArrowIcon fill={'#ffffff'} alt={'화살표'} />
        </Arrow>
      </ImgWrap>

      <Info>
        <h1>{info.name}</h1>
        <div>
          <Star src={`${process.env.PUBLIC_URL}/assets/Home/star.svg`} alt={'스타'} />
          <Score>{info.reviewScore}</Score>
          <Count>{`(${info.reviewCount})`}</Count>
        </div>
        <Address>{info.address}</Address>
      </Info>
    </Container>
  );
};

export default StoreInfo;
const Container = styled.div`
  width: 80%;
  height: 72.3rem;
  border-bottom: 0.5px solid var(--light-gray, #f2f2f2);
  @media (max-width: 768px) {
    width: 100%;
    height: 125.5rem;
  }
`;

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

const Info = styled.div`
  width: 100%;
  height: 12.7rem;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  > div {
    align-items: center;
    display: flex;
    flex-direction: row;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 768px) {
    height: 31rem;
    padding: 6rem;
    > h1 {
      font-size: 5rem;
      margin-bottom: 3rem;
    }
    > div {
      margin-bottom: 3rem;
    }
  }
`;

const Star = styled.img`
  width: 2rem;
  height: 2rem;
  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
  }
`;

const Score = styled.p`
  font-size: 1.4rem;
  color: #ff6464;
  margin: 0.2rem 1rem 0 1rem;
  @media (max-width: 768px) {
    font-size: 3.5rem;
    margin: 0.2rem 3rem 0 3rem;
  }
`;
const Count = styled.p`
  font-size: 1.4rem;
  color: #e0e0e0;
  margin-top: 0.2rem;
  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const Address = styled.p`
  font-size: 1.2rem;
  color: #565656;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;
