import React from 'react';
import { BookMarkDummy } from './Dummy/BookMarkDummy';
import styled from 'styled-components';

const BookMarkList = () => {
  return (
    <Wrap>
      <BookMarkTitle> 내가 북마크한 매장</BookMarkTitle>
      <BookMarks>
        {BookMarkDummy.map((i) => (
          <BookMark key={i.storeName}>
            <StoreImg src={`assets/${i.photo}`} alt={`${i.storeName}}의 이미지`} />
            <BookMarkIcon src="assets/bookmark.png" alt="북마크아이콘" />
            <h3>{i.storeName}</h3>
            <p>{i.address}</p>
          </BookMark>
        ))}
      </BookMarks>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: calc(100vw - 10%);
  margin-left: 10%;
`;
const BookMarkTitle = styled.h1`
  margin: 0.3rem 0 1rem 0;
  font-size: 0.88rem;
  padding-top: 1.3rem;
  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 0;
    margin-top: 2rem;
  }
`;

const BookMarks = styled.div`
  display: flex;
  height: 17rem;
  width: 100%;
  padding: 1rem 0 1rem 0;
  overflow-x: auto;
  /* 인터넷 익스플로러를 위한 스타일 */
  -ms-overflow-style: none;

  /* 파이어폭스를 위한 스타일 */
  scrollbar-width: none;

  /* 웹킷(크롬, 사파리, 새로운 엣지) 브라우저를 위한 스타일 */
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 768px) {
    font-size: 0.75rem;
    height: 12rem;
  }
`;

const BookMark = styled.div`
  margin-right: 1.25rem;
  width: 10.13rem;
  height: 14.38rem;
  border: solid;
  border-color: #d9d9d9;
  border-width: 1px;
  border-radius: 0.5rem;
  flex-shrink: 0;
  position: relative;
  cursor: pointer;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    transform: scale(1.1);
  }
  & > h3 {
    font-size: 0.88rem;
    margin: 0.5rem;
  }
  & > p {
    font-size: 0.63rem;
    margin: 1rem 0 0 0.5rem;
    color: rgba(86, 86, 86, 1);
  }
  @media (max-width: 768px) {
    width: 7.5rem;
    height: 10.5rem;

    & > h3 {
      font-size: 0.75rem;
    }
    & > p {
      font-size: 0.5rem;
      margin: 0.5rem 0 0 0.55rem;
    }
  }
`;

const StoreImg = styled.img`
  width: 100%;
  height: 10.13rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  @media (max-width: 768px) {
    height: 7.5rem;
  }
`;

const BookMarkIcon = styled.img`
  width: 0.94rem;
  height: 1.25rem;
  position: absolute;
  bottom: 4.8rem;
  right: 0.5rem;
  @media (max-width: 768px) {
    bottom: 3.5rem;
  }
`;
export default BookMarkList;
