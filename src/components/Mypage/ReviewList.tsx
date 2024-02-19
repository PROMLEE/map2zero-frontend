import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { Link, useNavigate } from 'react-router-dom';
import { DeleteIdState, ReviewStateSelector, ReviewsState } from '../../recoil/Mypage/myPageState';
import { ReviewModalState } from '../../recoil/confirmModal';
import ReviewModal from '../Modal/ReviewModal';

const ReviewList = () => {
  const navigate = useNavigate();
  const [displayItems, setDisplayItems] = useRecoilState(ReviewsState);

  const items = useRecoilValue(ReviewStateSelector);
  const [modalOpen, setModalOpen] = useRecoilState(ReviewModalState);
  const setDeleteIdState = useSetRecoilState(DeleteIdState);

  const handleResize = useCallback(() => {
    const newData = window.innerWidth < 784 && items ? items.slice(0, 2) : items;
    setDisplayItems(newData);
  }, [items]);

  useEffect(() => {
    setDisplayItems(items);
  }, [items, setDisplayItems]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  const modalHandler = (id: number) => {
    setDeleteIdState((prevState: any) => ({
      ...prevState,
      review_id: id,
      store_id: null,
      type: 'reviews',
    }));
    setModalOpen(!modalOpen);
  };
  return (
    <Wrap>
      <ReviewModal />
      <div>
        <ReviewTitle> 내가 쓴 리뷰</ReviewTitle>
        <MoreDetails to={`/reviewdetail`}>더보기 {'>'}</MoreDetails>
      </div>
      {displayItems && displayItems.length > 0 ? (
        <Reviews>
          <div>
            {displayItems.map((i: any) => (
              <Review
                key={i.id}
                onClick={() => {
                  navigate(`/store/${i.store.id}`);
                }}
              >
                <StoreImg>
                  <img
                    src={i.photo?.url || `${process.env.PUBLIC_URL}/assets/MyPage/lightgray.png`}
                    alt={`${i.store.name}의 이미지`}
                  />
                </StoreImg>
                <TextContainer>
                  <h3>{i.store.name}</h3>
                  <p>{i.text}</p>
                </TextContainer>
                <FavoriteIcon
                  src={
                    i.liked
                      ? `${process.env.PUBLIC_URL}/assets/StoreDetail/like.svg`
                      : `${process.env.PUBLIC_URL}/assets/StoreDetail/not_like.svg`
                  }
                  alt="좋아요아이콘"
                />
                <FavoriteCount>{i.likeCnt}</FavoriteCount>
                <TrashWrap
                  onClick={(e) => {
                    e.stopPropagation();
                    modalHandler(i.id);
                  }}
                >
                  <TrashIcon src={`${process.env.PUBLIC_URL}/assets/ReviewList/trash.svg`} alt="삭제아이콘" />
                  <TrashText>삭제</TrashText>
                </TrashWrap>
                <Date>{i.createdDate.slice(0, 10)}</Date>
              </Review>
            ))}
          </div>
        </Reviews>
      ) : (
        <NoReview>작성한 리뷰가 없습니다</NoReview>
      )}
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
  margin: 0 0 0rem 1rem;
  font-size: 1.4rem;
  @media (max-width: 768px) {
    font-size: 3rem;
    margin: 0 0 0rem 2rem;
  }
`;

const Reviews = styled.div`
  display: flex;
  > div {
    display: flex;
    justify-content: flex-start;
    width: 100%;
  }
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
  overflow: hidden;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    width: 59.74rem;
    height: 16rem;
    margin-right: 4rem;
  }
`;

const TextContainer = styled.div`
  padding: 1rem 0rem 1rem 0.3rem;
  display: flex;
  flex-direction: column;
  width: 18rem;
  & > h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1.4rem;
    margin: 0rem 0 0 1rem;
  }
  & > p {
    line-height: 1.3rem;
    font-size: 1rem;
    margin: 1rem 0 0 1rem;
    color: rgba(86, 86, 86, 1);
    overflow: hidden;
  }
  @media (max-width: 768px) {
    width: 30rem;
    padding: 1.5rem 0rem 1.5rem 0.8rem;
    & > h3 {
      font-size: 2.5rem;
    }
    & > p {
      margin: 2rem 0 0 1rem;
      line-height: 2.3rem;
      font-size: 1.7rem;
    }
  }
`;

const StoreImg = styled.div`
  > img {
    width: 10rem;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    @media (max-width: 768px) {
      width: 16rem;
    }
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
  left: 8rem;
  @media (max-width: 768px) {
    font-size: 2rem;
    left: 12.8rem;
  }
`;
const TrashText = styled.p`
  position: absolute;
  left: 0;
  visibility: hidden;
  left: 32rem;
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
  right: 0.6rem;
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
  right: 1rem;
  top: 1rem;
  @media (max-width: 768px) {
    font-size: 2rem;
    right: 1.5rem;
    top: 1.5rem;
  }
`;
const NoReview = styled.div`
  width: 80%;
  margin-left: 1rem;
  height: 5rem;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    height: 12.5rem;
    margin-left: 2rem;
    font-size: 3.5rem;
  }
`;
