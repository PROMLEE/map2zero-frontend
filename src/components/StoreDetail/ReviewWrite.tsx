import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { reviewmodalState } from '../../recoil';
import { StarRating, Storetag, TextReview, Addpic } from '../StoreDetail';

export const ReviewWrite = () => {
  const setModal = useSetRecoilState(reviewmodalState);

  return (
    <Background>
      <Modal>
        <Xbutton
          src={`${process.env.PUBLIC_URL}/assets/StoreDetail/xbutton.png`}
          onClick={() => {
            setModal(false);
          }}
        />
        <Title>리뷰 작성</Title>
        <Texts $margintopPC={'3.7rem'} $margintopMB={'10.25rem'}>
          별점을 선택해 주세요
        </Texts>
        <StarRating />
        <Texts $margintopPC={'3.2rem'} $margintopMB={'8rem'}>
          태그를 선택해 주세요
        </Texts>
        <Storetag />
        <Texts $margintopPC={'5.6rem'} $margintopMB={'6.5rem'}>
          리뷰를 작성해 주세요
        </Texts>
        <TextReview />
        <Texts $margintopPC={'3.2rem'} $margintopMB={'8rem'}>
          사진을 추가해 주세요
        </Texts>
        <Addpic />
        <CompleteButton>작성 완료</CompleteButton>
      </Modal>
    </Background>
  );
};
const Background = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 2;
  background: rgba(0, 0, 0, 0.3);
  @media (max-width: 768px) {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
const Modal = styled.div`
  position: fixed;
  display: flex;
  overflow: scroll;
  flex-direction: column;
  background: #fff;
  z-index: 2;
  width: 60.8rem;
  height: 80rem;
  border-radius: 1.6rem;
  padding-bottom: 6rem;
  @media (max-width: 768px) {
    border-radius: 4rem 4rem 0rem 0rem;
    bottom: 0rem;
    width: 100%;
    height: 90%;
  }
`;
const Xbutton = styled.img`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  right: 1.6rem;
  top: 1.6rem;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 3.75rem;
    height: 3.75rem;
    right: 4rem;
    top: 4rem;
  }
`;
const Title = styled.div`
  position: relative;
  margin-top: 6.25rem;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Noto Sans KR';
  font-size: 1.6rem;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;
const Texts = styled.div<{ $margintopPC: string; $margintopMB: string }>`
  position: relative;
  margin-top: ${(props) => props.$margintopPC};
  color: #000;
  font-family: 'Noto Sans KR';
  margin-left: 6.4rem;
  font-size: 1.2rem;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-top: ${(props) => props.$margintopMB};
    margin-left: 6.5rem;
  }
`;
const CompleteButton = styled.button`
  width: 32.7rem;
  padding: 1.6rem;
  text-align: center;
  margin-top: 6.1rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.2rem;
  font-family: 'Noto Sans KR';
  font-weight: 600;
  border-radius: 0.8rem;
  background: #f2f2f2;
  color: #565656;
  /* background: #0b5c71; */
  /* color: #fff; */
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 90%;
    padding: 4rem;
    margin-top: 5.5rem;
    border-radius: 2rem;
    font-size: 3rem;
  }
`;
