import React from 'react';
import { BookMarkDummy } from './Dummy/BookMarkDummy';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

type ownerProps = {
  owner?: boolean;
};
const BookMarkList = ({ owner }: ownerProps) => {
  const url = owner ? 'ownerUrl' : 'defaultUrl';
  const navigate = useNavigate();
  const onClickBookMark = () => {
    navigate(`/store`);
  };
  const onClickDetailBookMark = () => {
    navigate(`/bookmarkdetail`);
  };

  
  

  return (
    <Wrap>
      <div onClick={onClickDetailBookMark}>
        <BookMarkTitle> 내가 북마크한 매장</BookMarkTitle>
        <MoreDetails to={`/bookmarkdetail`}>더보기 {'>'}</MoreDetails>
      </div>
      <BookMarks onClick={onClickBookMark}>
        {BookMarkDummy.map((i, index) => (
          <BookMark key={index}>
            <StoreImg src={`${process.env.PUBLIC_URL}/assets/MyPage/${i.photo}`} alt={`${i.storeName}의 이미지`} />
            <BookMarkIcon src={`${process.env.PUBLIC_URL}/assets/MyPage/bookmark.png`} alt="북마크아이콘" />
            <h3>{i.storeName}</h3>
            <p>{i.address}</p>
          </BookMark>
        ))}
      </BookMarks>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 80%;
  @media (max-width: 768px) {
    width: calc(100vw - 5%);
    margin-left: 5%;
    > div {
      margin-top: 6rem;
    }
  }

  > div {
    margin-top: 4rem;
    display: flex;
    justify-content: space-between;
  }
`;

const MoreDetails = styled(Link)`
  font-size: 1.2rem;
  color: #565656;
  text-decoration: none;
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-right: 10%;
  }
`;

const BookMarkTitle = styled.h1`
  margin: 0 0 0 1rem;
  font-size: 1.4rem;
  padding-top: 2rem;
  @media (max-width: 768px) {
    font-size: 3rem;
    padding: 0;
    margin: 0 0 0 2rem;
  }
`;

const BookMarks = styled.div`
  display: flex;
  height: 30rem;
  width: 100%;
  padding: 3rem 0 3rem 1rem;
  overflow-x: hidden;

  /* 인터넷 익스플로러를 위한 스타일 */
  -ms-overflow-style: none;

  /* 파이어폭스를 위한 스타일 */
  scrollbar-width: none;

  /* 웹킷(크롬, 사파리, 새로운 엣지) 브라우저를 위한 스타일 */
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 768px) {
    height: 55rem;
    padding: 5rem 0 5rem 2rem;
    overflow-x: auto;
  }
`;

const BookMark = styled.div`
  margin-right: 2.4rem;
  width: 16.2rem;
  height: 23rem;
  border: solid;
  border-color: #d9d9d9;
  border-width: 1px;
  border-radius: 8px;
  flex-shrink: 0;
  position: relative;
  cursor: pointer;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    transform: scale(1.1);
  }
  & > h3 {
    font-size: 1.4rem;
    margin: 1rem;
  }
  & > p {
    font-size: 1rem;
    margin: 2rem 0 0 1rem;
    color: rgba(86, 86, 86, 1);
  }
  @media (max-width: 768px) {
    width: 30rem;
    height: 42rem;
    margin-right: 4rem;

    & > h3 {
      font-size: 3rem;
      margin: 1.5rem;
    }
    & > p {
      font-size: 2rem;
      margin: 3rem 0 0 1.5rem;
    }
  }
`;

const StoreImg = styled.img`
  width: 100%;
  height: 16.2rem;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  @media (max-width: 768px) {
    height: 30rem;
  }
`;

const BookMarkIcon = styled.img`
  width: 1.5rem;
  height: 2rem;
  position: absolute;
  bottom: 7.5rem;
  right: 1rem;
  @media (max-width: 768px) {
    bottom: 13rem;
    right: 2rem;
    width: 3rem;
    height: 3.75rem;
  }
`;
export default BookMarkList;
