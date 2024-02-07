import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { logoutModalState, withdrawModalState } from '../../recoil';

const AccountButton = () => {
  const [logoutModalOpen, setLogoutModalOpen] = useRecoilState(logoutModalState);
  const [withdrawModalOpen, setWithdrawModalOpen] = useRecoilState(withdrawModalState);

  return (
    <Container>
      <button onClick={() => setLogoutModalOpen(!logoutModalOpen)}>로그아웃</button>
      <div></div>
      <button onClick={() => setWithdrawModalOpen(!withdrawModalOpen)}>회원탈퇴</button>
    </Container>
  );
};

export default AccountButton;

const Container = styled.div`
  display: flex;
  padding: 16px 48px;
  justify-content: space-between;
  align-items: center;
  width: 29.2rem;

  @media (max-width: 768px) {
    width: 81.75rem;
  }

  div {
    height: 10px;
    border-right: 1px solid #848484;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    color: #848484;
    font-family: 'Noto Sans KR';
    font-size: 10px;
    font-weight: 500;
  }
`;
