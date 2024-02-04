import styled from 'styled-components';
import { StarRating, Storetag, TextReview, Addpic } from '.';
import { useSetRecoilState } from 'recoil';
import { eventDetailModal } from '../../recoil';
import { useEffect, useRef } from 'react';

export const EventDetail = () => {
  const setModal = useSetRecoilState(eventDetailModal);
  const modalRef = useRef<HTMLDivElement>(null); // 모달 ref 추가
  const closeModal = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeModal);
    return () => {
      document.removeEventListener('mousedown', closeModal);
    };
  }, []);

  return (
    <Background>
      <Modal ref={modalRef}>
        <Xbutton
          src={`${process.env.PUBLIC_URL}/assets/StoreDetail/xbutton.png`}
          onClick={() => {
            setModal(false);
          }}
        />
        <Title>리뷰 작성</Title>
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
  z-index: 3;
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
  &::-webkit-scrollbar {
    display: none;
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
