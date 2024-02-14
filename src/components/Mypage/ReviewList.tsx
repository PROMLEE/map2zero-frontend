import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { popUpModalState } from '../../recoil';
import ConfirmModal from '../Modal/ConfirmModal';
import { Link } from 'react-router-dom';
import { ReviewStateSelector } from '../../recoil/Mypage/myPageState';

type ownerProps = {
  owner?: boolean;
};

const ReviewList = ({ owner }: ownerProps) => {
  const url = owner ? 'ownerUrl' : 'review';
  const [displayData, setDisplayData] = useState([]);
  const [modalOpen, setModalOpen] = useRecoilState(popUpModalState);
  const info = useRecoilValue(ReviewStateSelector);
  console.log('리뷰 ', info.data);

  const modalHandler = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    if (window.innerWidth < 784 && info.data) {
      setDisplayData(info.data.slice(0, 2));
    } else {
      setDisplayData(info.data);
    }
  }, [window.innerWidth, info]);

  return (
    <Wrap>
      <ConfirmModal />
      <div>
        <ReviewTitle> 내가 쓴 리뷰</ReviewTitle>
        <MoreDetails to={`${url}`}>더보기 {'>'}</MoreDetails>
      </div>

      <Reviews>
        {displayData &&
          displayData.map((i: any) => (
            <Review key={i.id} onClick={modalHandler}>
              <StoreImg src={i.photo.url} alt={`${i.storeName}}의 이미지`} />
              <div>
                <h3>{i.store.name}</h3>
                <p>{i.text}</p>
              </div>
              <FavoriteIcon src={`${process.env.PUBLIC_URL}/assets/MyPage/favorite.png`} alt="좋아요아이콘" />
              <FavoriteCount>{i.likeCnt}</FavoriteCount>
              <TrashWrap>
                <TrashIcon src={`${process.env.PUBLIC_URL}/assets/MyPage/trash.png`} alt="삭제아이콘" />
                <TrashText>삭제</TrashText>
              </TrashWrap>
              <Date>{i.createdDate}</Date>
            </Review>
          ))}
      </Reviews>
    </Wrap>
  );
};
export default ReviewList;

const Wrap = styled.div`
  width: 80%;
  > div {
    margin-top: 4rem;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    width: calc(100vw - 5%);
    margin-left: 5%;
    > div {
      margin-top: 6rem;
    }
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

const ReviewTitle = styled.h1`
  margin: 0 0 2rem 1rem;
  font-size: 1.4rem;
  @media (max-width: 768px) {
    font-size: 3rem;
    margin: 0 0 4rem 2rem;
  }
`;

const Reviews = styled.div`
  display: flex;
  margin-left: 1rem;
  height: 17rem;
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
    height: 25rem;
    padding: 0 0 0 2rem;
    overflow-x: auto;
  }
`;

const Review = styled.div`
  margin-right: 2.4rem;
  width: 34.8rem;
  height: 10rem;
  border: solid;
  border-color: #d9d9d9;
  border-width: 1px;
  border-radius: 8px;
  flex-shrink: 0;
  position: relative;
  display: flex;
  cursor: pointer;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  & > div > h3 {
    font-size: 1.4rem;
    margin: 0.8rem 0 0 0.8rem;
  }
  & > div > p {
    font-size: 1rem;
    margin: 0.5rem 0 0 0.8rem;
    color: rgba(86, 86, 86, 1);
  }
  @media (max-width: 768px) {
    width: 59.74rem;
    height: 16rem;
    margin-right: 4rem;
    & > div > h3 {
      font-size: 2.5rem;
      margin: 2rem;
    }
    & > div > p {
      font-size: 2rem;
      margin-left: 2rem;
    }
  }
`;
const StoreImg = styled.img`
  width: 10rem;
  height: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  @media (max-width: 768px) {
    width: 16rem;
  }
`;

const FavoriteIcon = styled.img`
  width: 1.5rem;
  height: 1.4rem;
  position: absolute;
  left: 7.5rem;
  bottom: 1.7rem;
  @media (max-width: 768px) {
    width: 2.6rem;
    height: 2.5rem;
    left: 12rem;
    bottom: 3rem;
  }
`;
const FavoriteCount = styled.p`
  font-size: 0.9rem;
  position: absolute;
  color: rgba(86, 86, 86, 1);
  bottom: 0.5rem;
  left: 7.9rem;
  @media (max-width: 768px) {
    font-size: 2rem;
    left: 12.4rem;
  }
`;
const TrashText = styled.p`
  position: absolute;
  left: 0;
  visibility: hidden;
  left: 31.5rem;
  bottom: 0.6rem;
  @media (max-width: 768px) {
    left: 53rem;
    bottom: 2rem;
  }
`;
const TrashWrap = styled.div`
  &:hover ${TrashText} {
    visibility: visible; /* 호버 시 텍스트 보임 */
  }
`;

const TrashIcon = styled.img`
  width: 2rem;
  height: 2.4rem;
  right: 0.4rem;
  bottom: 0.3rem;
  position: absolute;
  @media (max-width: 768px) {
    width: 5rem;
    height: 6rem;
  }
`;

const Date = styled.p`
  font-size: 1rem;
  color: #d9d9d9;
  position: absolute;
  right: 0.7rem;
  top: 0.7rem;
  @media (max-width: 768px) {
    font-size: 2rem;
    right: 1.6rem;
    top: 1.6rem;
  }
`;
