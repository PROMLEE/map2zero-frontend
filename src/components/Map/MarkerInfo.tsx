import styled from 'styled-components';

interface MarkerProps {
  id: number;
  name: string;
  address: {
    province: string;
    city: string;
    road_name: string;
    lot_number: string;
  };
  review_cnt: number;
  average_score: number;
  x: number;
  y: number;
  photo: {
    url: string;
    width: number;
    height: number;
  };
  distance: number;
  bookmarked: boolean;
}

export const MarkerInfo = ({ id, name, photo, bookmarked, review_cnt, average_score }: MarkerProps) => {
  return (
    <MarkerBox>
      <Title>{name}</Title>
      <InfoBox>
        <StoreImg src={photo ? photo.url : `${process.env.PUBLIC_URL}/assets/Navbar/Logo.png`} />
        <TextBox>
          <TopBox>
            <StarBox>
              {' '}
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  src={
                    index < average_score
                      ? `${process.env.PUBLIC_URL}/assets/StoreDetail/star_full.svg`
                      : `${process.env.PUBLIC_URL}/assets/StoreDetail/star_empty.svg`
                  }
                  alt={`Star ${index}`}
                />
              ))}
              <Reviewnum>({review_cnt})</Reviewnum>
            </StarBox>
            <BookmarkImg
              src={
                bookmarked
                  ? `${process.env.PUBLIC_URL}/assets/StoreDetail/bookmark_o.svg`
                  : `${process.env.PUBLIC_URL}/assets/StoreDetail/bookmark_x.svg`
              }
            />
          </TopBox>
          <AdressBox>매장 주소</AdressBox>
          <BottomButton href={`/store/${id}`}>매장 상세보기 {'>>'}</BottomButton>
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
  @media screen and (max-width: 768px) {
    width: 101rem;
    height: 71rem;
  }
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
  @media screen and (max-width: 768px) {
    font-size: 5rem;
    margin-top: 6rem;
    margin-left: 6rem;
  }
`;
const InfoBox = styled.div`
  display: flex;
`;
const StoreImg = styled.img`
  width: 20.1rem;
  height: 20.1rem;
  background-size: 100% 100%;
  margin-top: 1.6rem;
  margin-left: 2.4rem;
  background-color: #d9d9d9;
  border-radius: 1rem;
  @media screen and (max-width: 768px) {
    width: 45rem;
    height: 45rem;
    margin-top: 2rem;
    margin-left: 6rem;
  }
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.6rem;
  margin-left: 2.4rem;
  width: 17.7rem;
  height: 2rem;
  @media screen and (max-width: 768px) {
    width: 40rem;
    height: 45rem;
    margin-top: 2rem;
    margin-left: 3rem;
  }
`;
const TopBox = styled.div`
  display: flex;
  width: 17.7rem;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    width: 40rem;
  }
`;
const StarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Star = styled.img`
  width: 1.4rem;
  height: 1.4rem;
  @media screen and (max-width: 768px) {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

const Reviewnum = styled.div`
  color: var(--gray, #e0e0e0);
  text-align: right;
  font-family: 'Noto Sans KR';
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;
const BookmarkImg = styled.img`
  width: 1.4rem;
  height: 1.8rem;
  @media screen and (max-width: 768px) {
    width: 3.5rem;
    height: 4rem;
  }
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
  @media screen and (max-width: 768px) {
    width: 40rem;
    height: 30rem;
    font-size: 3rem;
  }
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
  @media screen and (max-width: 768px) {
    width: 20rem;
    font-size: 2rem;
    height: 5rem;
    padding: 0.8rem 1.6rem;
  }
`;
