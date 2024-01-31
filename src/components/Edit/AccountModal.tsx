import styled from 'styled-components';

type TAccountModal = {
  title: string;
  confirmText: string;
  cancelText: string;
  confirmHandler: () => void;
  cancelHandler: () => void;
};

const AccountModal: React.FC<TAccountModal> = ({ title, confirmText, cancelText, confirmHandler, cancelHandler }) => {
  return (
    <BackDrop>
      <Modal>
        <img src={`${process.env.PUBLIC_URL}/assets/Edit/close.svg`} alt="close" onClick={cancelHandler} />
        <h1>{title}</h1>
        <ButtonDiv>
          <button onClick={confirmHandler}>{confirmText}</button>
          <button onClick={cancelHandler}>{cancelText}</button>
        </ButtonDiv>
      </Modal>
    </BackDrop>
  );
};

export default AccountModal;

const BackDrop = styled.div`
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  overflow-y: scroll;
  z-index: 3;
  border-radius: 16px;
  width: 47.2rem;
  height: 24.2rem;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    width: 81.75rem;
    height: 62.25rem;
  }

  h1 {
    color: #000;
    font-family: 'Noto Sans KR';
    font-size: 20px;
    font-weight: 600;
    line-height: 135%; /* 27px */

    @media (max-width: 768px) {
      line-height: normal;
    }
  }

  img {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 15px;
    height: 15px;
    cursor: pointer;

    @media (max-width: 768px) {
      width: 12px;
      height: 12px;
    }
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  margin-top: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 4rem;
  }

  button {
    border-radius: 8px;
    background: #f2f2f2;
    width: 20rem;
    padding: 16px;
    box-sizing: border-box;
    margin: 0 1.2rem;
    flex-shrink: 0;
    cursor: pointer;

    color: #000;
    font-family: 'Noto Sans KR';
    font-size: 12px;
    font-weight: 500;

    &:hover {
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), var(--light-gray, #f2f2f2);
    }

    @media (max-width: 768px) {
      width: 59.75rem;
      margin: 4rem 0 0 0;
    }
  }
`;
