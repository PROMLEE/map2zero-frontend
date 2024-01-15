import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { popUpModalState } from '../../recoil';
import { preventScroll, allowScroll } from './scroll';

const ConfirmModal = () => {
  const [modalOpen, setModalOpen] = useRecoilState(popUpModalState);
  const modalHandler = () => {
    setModalOpen(!modalOpen);
  };
  const isSmallScreen = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  };

  useEffect(() => {
    if (modalOpen) {
      const prevScrollY = preventScroll();
      return () => {
        allowScroll(prevScrollY);
      };
    }
  }, [modalOpen]);

  return (
    <Modal
      isOpen={modalOpen}
      style={{
        overlay: {
          backgroundColor: ' rgba(0, 0, 0, 0.3)',
          width: '100%',
          boxSizing: 'border-box',
        },
        content: {
          boxSizing: 'border-box',
          justifyContent: 'center',
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '1rem',
          alignItems: 'center',
          backgroundColor: 'white',
          ...(isSmallScreen()
            ? {
                height: '15.44rem',
                top: undefined,
                bottom: '0',
                left: '0',
                width: '100vw',
              }
            : {
                height: '16.56rem',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                position: 'relative',
                width: '29.5rem',
              }),
        },
      }}
      shouldCloseOnOverlayClick={false}
    >
      <Message>리뷰를 삭제할까요?</Message>
      <Close src="assets/close.png" alt="닫기" onClick={modalHandler} />
      <BtnWrap>
        <ConfirmBtn>네</ConfirmBtn>
        <ConfirmBtn onClick={modalHandler}>아니오</ConfirmBtn>
      </BtnWrap>
    </Modal>
  );
};

export default ConfirmModal;

const Message = styled.h1`
  font-weight: border;
  font-size: 1.25rem;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;
const Close = styled.img`
  width: 0.94rem;
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
`;
const BtnWrap = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
`;
const ConfirmBtn = styled.button`
  background-color: rgba(242, 242, 242, 1);
  width: 12rem;
  height: 2.94rem;
  font-size: 0.75rem;
  margin: 0 0.5rem 0 0.5rem;
  border: 0;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: bolder;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 20.44rem;
    margin-bottom: 1rem;
  }
`;
