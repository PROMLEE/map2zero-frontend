import React from 'react';
import styled from 'styled-components';
import { ReviewDummy } from './Dummy/ReviewDummy';
const ReviewList = () => {
  return (
    <div>
      <ReviewTitle> 내가 쓴 리뷰</ReviewTitle>
      <Reviews>
        {ReviewDummy.map((i) => (
          <Review key={i.storeName}>
            <StoreImg src={`assets/${i.photo}`} alt={`${i.storeName}}의 이미지`} />
            <div>
              <h3>{i.storeName}</h3>
              <p>{i.content}</p>
            </div>
            <LikeIcon src="assets/like.png" alt="좋아요아이콘" />
            <LikeCount>{i.likeCount}</LikeCount>
            <TrashIcon src="assets/trash.png" alt="삭제아이콘" />
            <Date>{i.date}</Date>
          </Review>
        ))}
      </Reviews>
    </div>
  );
};

const ReviewTitle = styled.h1`
  margin: 3rem 0 1rem 0;
  font-size: 0.88rem;
`;

const Reviews = styled.div`
  display: flex;
  width: 72.25rem;
  height: 10rem;
  overflow-x: auto;
  /* 인터넷 익스플로러를 위한 스타일 */
  -ms-overflow-style: none;

  /* 파이어폭스를 위한 스타일 */
  scrollbar-width: none;

  /* 웹킷(크롬, 사파리, 새로운 엣지) 브라우저를 위한 스타일 */
  &::-webkit-scrollbar {
    display: none;
  }
`;
export default ReviewList;

const Review = styled.div`
  margin-right: 1.25rem;
  width: 21.75rem;
  height: 6.25rem;
  border: solid;
  border-color: #d9d9d9;
  border-width: 1px;
  border-radius: 0.5rem;
  flex-shrink: 0;
  position: relative;
  display: flex;
  cursor: pointer;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  & > div > h3 {
    font-size: 0.88rem;
    margin: 0.5rem 0 0 0.5rem;
  }
  & > div > p {
    font-size: 0.63rem;
    margin: 0.2rem 0 0 0.5rem;
    color: rgba(86, 86, 86, 1);
  }
`;
const StoreImg = styled.img`
  width: 6.25rem;
  height: 100%;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
`;

const LikeIcon = styled.img`
  width: 1rem;
  height: 0.88rem;
  position: absolute;
  left: 4.6rem;
  bottom: 1.2rem;
`;
const LikeCount = styled.p`
  font-size: 0.5rem;
  position: absolute;
  color: rgba(86, 86, 86, 1);
  bottom: 0rem;
  left: 4.85rem;
`;
const TrashIcon = styled.img`
  width: 1.69;
  position: absolute;
  right: 0.4rem;
  bottom: 0.4rem;
`;
const Date = styled.p`
  font-size: 0.63rem;
  color: #d9d9d9;
  position: absolute;
  right: 0.7rem;
  top: 0.1rem;
`;
