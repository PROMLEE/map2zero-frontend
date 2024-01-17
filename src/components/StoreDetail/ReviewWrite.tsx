import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { reviewmodalState } from '../../recoil';
import { StarRating, Storetag, TextReview, Addpic } from '../StoreDetail';

export default function ReviewWrite() {
  const setModal = useSetRecoilState(reviewmodalState);

  return (
    <Background>
      <Modal>
        <Xbutton
          onClick={() => {
            setModal(false);
          }}
        >
          X
        </Xbutton>
        <Topbox />
        <Texts $margintop={'8rem'}>별점을 선택해 주세요</Texts>
        <StarRating />
        <Texts $margintop={'8rem'}>태그를 선택해 주세요</Texts>
        <Storetag />
        <Texts $margintop={'6.5rem'}>리뷰를 작성해 주세요</Texts>
        <TextReview />
        <Texts $margintop={'8rem'}>사진을 추가해 주세요</Texts>
        <Addpic />
        <CompleteButton>작성 완료</CompleteButton>
      </Modal>
    </Background>
  );
}
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  background: rgba(0, 0, 0, 0.3);
  @media (max-width: 768px) {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
const Topbox = styled.div`
  height: 14rem;
  @media (max-width: 768px) {
  }
`;
const Modal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%;
  z-index: 1;
  bottom: 0rem;
  border-radius: 4rem 4rem 0rem 0rem;
  background: #fff;
  @media (max-width: 768px) {
  }
`;
const Xbutton = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  height: 15px;
  width: 15px;
  &:hover {
    cursor: pointer;
  }
`;
const Texts = styled.div<{ $margintop: string }>`
  position: relative;
  margin-top: ${(props) => props.$margintop};
  margin-left: 6.5rem;
  color: #000;
  font-family: 'Noto Sans KR';
  font-size: 3rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media (max-width: 768px) {
  }
`;
const CompleteButton = styled.button`
  width: 90%;
  padding: 4rem;
  text-align: center;
  margin-top: 5.5rem;
  margin-left: 6rem;
  border-radius: 2rem;
  background: #0b5c71;
  color: #fff;
  font-family: 'Noto Sans KR';
  font-size: 3rem;
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
`;
