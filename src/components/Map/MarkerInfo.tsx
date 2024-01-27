import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const MarkerInfo = () => {
  return (
    <MarkerBox>
      <Title>매장명</Title>
      <InfoBox>
        <StoreImg />
        <TextBox>
          <TopBox>
            <StarBox>
              <Star src={`${process.env.PUBLIC_URL}/assets/StoreDetail/star_full.svg`} />
              <Star src={`${process.env.PUBLIC_URL}/assets/StoreDetail/star_full.svg`} />
              <Star src={`${process.env.PUBLIC_URL}/assets/StoreDetail/star_full.svg`} />
              <Star src={`${process.env.PUBLIC_URL}/assets/StoreDetail/star_empty.svg`} />
              <Star src={`${process.env.PUBLIC_URL}/assets/StoreDetail/star_empty.svg`} />
              <Reviewnum>(32)</Reviewnum>
            </StarBox>
            <BookmarkImg src={`${process.env.PUBLIC_URL}/assets/StoreDetail/bookmark.png`} />
          </TopBox>
          <AdressBox>매장 주소</AdressBox>
          <BottomButton href="/store">매장 상세보기 {'>>'}</BottomButton>
        </TextBox>
      </InfoBox>
    </MarkerBox>
  );
};
const MarkerBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 45rem;
  height: 31.6rem;
  background-image: url('/assets/Map/balloon.svg');
  background-size: cover;
`;
const Title = styled.div`
  color: var(--Main, #0b5c71);
  font-family: 'Noto Sans KR';
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-weight: bold;
  margin-top: 2.4rem;
  margin-left: 2.4rem;
`;
const InfoBox = styled.div`
  display: flex;
`;
const StoreImg = styled.div`
  background-image: url('/assets/Navbar/logo.png');
  width: 20.1rem;
  height: 20.1rem;
  background-size: 100% 100%;
  margin-top: 1.6rem;
  margin-left: 2.4rem;
  background-color: #d9d9d9;
  border-radius: 1rem;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.6rem;
  margin-left: 2.4rem;
  width: 17.7rem;
  height: 2rem;
`;
const TopBox = styled.div`
  display: flex;
  width: 17.7rem;
  justify-content: space-between;
`;
const StarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Star = styled.img`
  width: 1.4rem;
  height: 1.4rem;
`;

const Reviewnum = styled.div`
  color: var(--gray, #e0e0e0);
  text-align: right;
  font-family: 'Noto Sans KR';
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const BookmarkImg = styled.img`
  width: 1.4rem;
  height: 1.8rem;
`;
const AdressBox = styled.div`
  margin-top: 1.6rem;
  width: 14.4rem;
  height: 11.9rem;
  flex-shrink: 0;
  color: #565656;
  font-family: 'Noto Sans KR';
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const BottomButton = styled.a`
  text-decoration: none;
  margin-top: 1.4rem;
  margin-left: auto;
  display: flex;
  width: 15.2rem;
  height: 3.2rem;
  padding: 0.8rem 1.6rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 1.6rem;
  background: var(--Point2, #74b69d);
  color: #fff;
  text-align: right;
  font-family: 'Noto Sans KR';
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
