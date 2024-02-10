import styled from 'styled-components';
import { ReviewDummy } from '../components/Mypage/Dummy/ReviewDummy';
import { useRecoilState } from 'recoil';
import { popUpModalState } from '../recoil';
import AccountModal from '../components/Edit/AccountModal';
import { Mobiletop } from '../components';

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
      <Mobiletop pagename="내가 쓴 리뷰" />
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
          <Review key={i.storeName}>
            <StoreImg src={`${process.env.PUBLIC_URL}/assets/MyPage/${i.photo}`} alt={`${i.storeName}}의 이미지`} />
            <Heart>
              <img src={`${process.env.PUBLIC_URL}/assets/ReviewList/heart.svg`} alt="heart" />
              <p>{i.favoriteCount}</p>
            </Heart>
            <DataWrap>
              <Contents>
                <h3>{i.storeName}</h3>
                <p>{i.content}</p>
              </Contents>
              <RightWrap>
                <Date>{i.date}</Date>
                <TrashWrap onClick={modalHandler}>
                  <TrashIcon src={`${process.env.PUBLIC_URL}/assets/ReviewList/trash.svg`} alt="trash" />
                  <TrashText>삭제</TrashText>
                </TrashWrap>
              </RightWrap>
            </DataWrap>
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

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  > h1 {
    margin-top: 6.4rem;
    color: #000000;
    font-family: 'Noto Sans KR';
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 40px;
    width: 92.4rem;

    @media (max-width: 1000px) {
      width: 72rem;
    }

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
  border: 1px solid #f2f2f2;
  border-radius: 8px;
  flex-shrink: 0;
  position: relative;
  display: flex;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 1000px) {
    width: 35rem;
  }

  @media (max-width: 768px) {
    width: 81.25rem;
    height: 16rem;
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

const Heart = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 7.5rem;
  bottom: 0.5rem;

  @media (max-width: 768px) {
    left: 12rem;
  }

  > img {
    width: 16px;
    height: 14px;

    @media (max-width: 768px) {
      width: 11px;
      height: 10px;
    }
  }

  > p {
    font-weight: 400;
    font-size: 8px;
    line-height: 11px;
  }
`;

const DataWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  width: 100%;
`;

const Contents = styled.div`
  > h3 {
    font-size: 14px;
    font-weight: 500;
    color: #000000;

    @media (max-width: 768px) {
      font-size: 10px;
    }
  }

  > p {
    font-size: 10px;
    margin-top: 4px;
    width: 21.3rem;
    color: #565656;

    @media (max-width: 1000px) {
      width: 18rem;
    }

    @media (max-width: 768px) {
      font-size: 8px;
      width: 50rem;
    }
  }
`;

const RightWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const Date = styled.p`
  font-size: 10px;
  color: #d9d9d9;

  @media (max-width: 768px) {
    font-size: 8px;
  }
`;

const TrashText = styled.p`
  position: absolute;
  visibility: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 2.7rem;
  color: #565656;

  @media (max-width: 768px) {
    font-size: 8px;
    width: 6.25rem;
  }
`;

const TrashWrap = styled.div`
  position: relative;
  width: 2.7rem;
  height: 2.7rem;
  margin: -8px;

  &:hover ${TrashText} {
    visibility: visible;
  }

  @media (max-width: 768px) {
    font-size: 8px;
    width: 6.25rem;
    height: 6.25rem;
  }
`;

const TrashIcon = styled.img`
  width: 100%;
  height: 100%;
`;
