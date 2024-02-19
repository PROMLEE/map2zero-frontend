import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {} from '../../recoil';
import { useRecoilValue } from 'recoil';
import { searchResultState } from '../../recoil';
import { useNavigate } from 'react-router-dom';

export const SearchResultList = () => {
  const searchResult = useRecoilValue(searchResultState);

  const [clickedIds, setClickedIds] = useState<Record<string, boolean>>({}); // 초기에는 클릭된 아이콘 ID x

  const handleClick = (id: number) => {
    setClickedIds((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  const navigate = useNavigate();

  function onClickStore(id: number) {
    navigate(`/store/${id}`);
  }

  const generateStarReviews = (reviewCount: number) => {
    const starReviews = [];
    const fullStar = `${process.env.PUBLIC_URL}assets/StoreDetail/star_full.svg`;
    const grayStar = `${process.env.PUBLIC_URL}assets/StoreDetail/star_empty.svg`;

    for (let i = 0; i < 5; i++) {
      if (i < Math.round(reviewCount)) {
        starReviews.push(<StarReview key={i} src={fullStar} alt="초록별아이콘" />);
      } else {
        starReviews.push(<StarReview key={i} src={grayStar} alt="회색별아이콘" />);
      }
    }
    return starReviews;
  };

  return (
    <SearchResultContainer>
      {searchResult.map((i) => (
        <Container key={i.id} onClick={() => onClickStore(i.id)}>
          <SearchText>{i.name}</SearchText>
          <ProductText>
            {i.products.map((data) => {
              return <div key={data.id}>{data.name}</div>;
            })}
          </ProductText>
          <AddressFrame>
            <AddressText>{i.address.province + ' ' + i.address.city + ' ' + i.address.road_name + ' '}</AddressText>
            <NumReview>
              {generateStarReviews(i.average_score)}
              <p>({i.review_cnt})</p>
            </NumReview>
          </AddressFrame>
          <StoreFrame>
            <StoreImg
              src={i.photo ? i.photo.url : `${process.env.PUBLIC_URL}/assets/Mypage/lightgray.png`}
              alt={i.name}
            />
            {/* photo 값 없어서 나중에 수정 필요 ->i.photo.url */}
          </StoreFrame>
          <BookMarkFrame>
            <BookMarkIcon
              src={
                i.bookmarked
                  ? `${process.env.PUBLIC_URL}/assets/StoreDetail/bookmark_o.svg`
                  : `${process.env.PUBLIC_URL}/assets/StoreDetail/bookmark_o.svg`
              }
              alt="북마크아이콘"
              onClick={() => handleClick(i.id)}
            />
          </BookMarkFrame>
        </Container>
      ))}
    </SearchResultContainer>
  );
};

const SearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 92.4rem;
  margin-top: 4.8rem;
`;

const Container = styled.div`
  width: 92.4rem;
  height: 162px;
  position: relative;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  border: 1px #f2f2f2 solid;
  margin-bottom: 2.4rem;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    background-color: lightgray;
  }

  @media (min-width: 768px) and (max-width: 999px) {
    width: 70.7rem;
    height: 162px;
    background: white;

    // 미디어 쿼리 내부에서 hover 효과를 초기화
    &:hover {
      transform: none;
    }
  }
`;

const SearchText = styled.div`
  left: 178px;
  top: 13px;
  position: absolute;
  color: #0b5c71;
  font-size: 16px;
  font-family: Noto Sans KR;
  font-weight: 500;
  word-wrap: break-word;

  @media (max-width: 768px) {
    left: 143px;
  }
`;

const ProductText = styled.div`
  left: 178px;
  top: 43px;
  position: absolute;
  color: #565656;
  font-size: 12px;
  font-family: Noto Sans KR;
  font-weight: 400;
  word-wrap: break-word;

  @media (max-width: 768px) {
    left: 143px;
  }
`;

const AddressFrame = styled.div`
  left: 178px;
  top: 106px;
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  display: inline-flex;

  @media (max-width: 768px) {
    left: 143px;
    top: 70px;
  }
`;

const AddressText = styled.div`
  color: #565656;
  font-size: 10px;
  font-family: Noto Sans KR;
  font-weight: 400;
  word-wrap: break-word;

  @media (max-width: 768px) {
    left: 143px;
    margin-top: 8px;
  }
`;

const NumReview = styled.div`
  height: 20px;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;

  & > p {
    color: #e0e0e0;
    font-family: Noto Sans KR;
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: right;
  }
`;

const StarReview = styled.img`
  width: 1.2rem;
  height: 12px;

  @media (max-width: 768px) {
    width: 2.2rem;
  }
`;

const StoreFrame = styled.div`
  width: 16.2rem;
  height: 16.2rem;
  left: 0;
  top: 0;
  position: absolute;
  background: white;

  @media (max-width: 768px) {
    width: 12.7rem;
    height: 12.8rem;
  }
`;

const StoreImg = styled.img`
  width: 162px;
  height: 162px;
  left: 0;
  top: 0;
  position: absolute;
  background: #d9d9d9;

  @media (max-width: 768px) {
    width: 127px;
    height: 128px;
  }
`;

const BookMarkFrame = styled.div`
  padding: 16px;
  left: 88rem;
  top: 0;
  position: absolute;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;
  display: inline-flex;

  @media (max-width: 768px) {
    padding: 16px;
    left: 82.3rem;
    top: 0;
    position: absolute;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    display: inline-flex;
  }
`;

const BookMarkIcon = styled.img`
  width: 11.72px;
  height: 15px;
`;
