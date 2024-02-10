import styled from 'styled-components';
import { ReviewDummy } from '../components/Mypage/Dummy/ReviewDummy';
import { useRecoilState } from 'recoil';
import { popUpModalState } from '../recoil';
import AccountModal from '../components/Edit/AccountModal';

export default function MyReview() {
  const [modalOpen, setModalOpen] = useRecoilState(popUpModalState);

  const modalHandler = () => {
    setModalOpen(!modalOpen);
  };

  //리뷰 삭제
  const deleteReviewHandler = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Container $nonescroll={modalOpen}>
      {modalOpen && (
        <AccountModal
          title="리뷰를 삭제할까요?"
          confirmText="네"
          cancelText="아니요"
          confirmHandler={deleteReviewHandler}
          cancelHandler={modalHandler}
        />
      )}
      <h1>내가 쓴 리뷰</h1>
      <Reviews>
        {ReviewDummy.map((i) => (
          <Review key={i.storeName} onClick={modalHandler}>
            <StoreImg src={`${process.env.PUBLIC_URL}/assets/MyPage/${i.photo}`} alt={`${i.storeName}}의 이미지`} />
            <Contents>
              <h3>{i.storeName}</h3>
              <p>{i.content}</p>
            </Contents>
            <Heart>
              <img src={`${process.env.PUBLIC_URL}/assets/MyPage/favorite.png`} alt="좋아요아이콘" />
              <p>{i.favoriteCount}</p>
            </Heart>
            <TrashWrap>
              <TrashIcon src={`${process.env.PUBLIC_URL}/assets/MyPage/trash.png`} alt="삭제아이콘" />
              <TrashText>삭제</TrashText>
            </TrashWrap>
            <Date>{i.date}</Date>
          </Review>
        ))}
      </Reviews>
    </Container>
  );
}

const Container = styled.div<{ $nonescroll: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: ${(props) => (props.$nonescroll ? 'hidden' : 'auto')};
  position: ${(props) => (props.$nonescroll ? 'fixed' : 'static')};
  z-index: ${(props) => (props.$nonescroll ? 2 : 0)};
  left: 0;
  right: 0;

  > h1 {
    margin-top: 6.4rem;
    color: #000000;
    font-family: 'Noto Sans KR';
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 40px;
    width: 924px;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const Reviews = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    margin-top: 24px;
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const Review = styled.div`
  width: 45rem;
  height: 10rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  flex-shrink: 0;
  position: relative;
  display: flex;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
  }
`;

const Contents = styled.div`
  padding: 8px;

  > h3 {
    font-size: 14px;
  }

  > p {
    font-size: 10px;
    margin-top: 4px;
    width: 213px;
    color: #565656;
  }
`;

const StoreImg = styled.img`
  width: 10rem;
  height: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;

  @media (max-width: 768px) {
  }
`;

const Heart = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 7.5rem;
  bottom: 0.5rem;

  > svg {
    width: 16px;
    height: 14px;
  }

  > p {
    font-weight: 400;
    font-size: 8px;
    line-height: 11px;
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
