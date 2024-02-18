import React from 'react';
import { BookMarkDummy } from './Dummy/BookMarkDummy';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Mobiletop from '../Mobiletop';

const MoreDetails = () => {
  const navigate = useNavigate();
  const onClickBookMark = () => {
    navigate(`/store`);
  };

  return (
    <>
      <Mobiletop pagename="내가 북마크한 매장" />
      <Wrap>
        <BookMarkTitle> 내가 북마크한 매장</BookMarkTitle>
        <BookMarks onClick={onClickBookMark}>
          {BookMarkDummy.map((i) => (
            <BookMark key={i.storeName}>
              <StoreImg src={`${process.env.PUBLIC_URL}/assets/MyPage/${i.photo}`} alt={`${i.storeName}의 이미지`} />
              <BookMarkIcon src={`${process.env.PUBLIC_URL}/assets/MyPage/bookmark.png`} alt="북마크아이콘" />
              <h3>{i.storeName}</h3>
              <p>{i.address}</p>
            </BookMark>
          ))}
        </BookMarks>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 92.4rem;
  margin: 0 auto;
  padding-bottom: 20rem;
  @media (max-width: 768px) {
    width: 85%;
  }
`;

const BookMarkTitle = styled.div`
  margin-top: 40px;
  font-size: 1.6rem;
  padding-top: 2rem;
  font-weight: 600;
  @media (max-width: 768px) {
    display: none;
  }
`;

const BookMarks = styled.div`
  margin-top: 40px;
  width: 928px;
  flex-wrap: wrap;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 768px) {
    width: 100%;
    gap: 2%;
  }
`;

const BookMark = styled.div`
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
    width: 49%;
    height: 42rem;
    margin-bottom: 2rem;
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

export default MoreDetails;
