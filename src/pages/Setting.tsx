import styled from 'styled-components';
import { Mobiletop } from '../components';
import { useRecoilValue, useRecoilState } from 'recoil';
import { imgModalState, logoutModalState, withdrawModalState } from '../recoil';
import ProfileImgModal from '../components/Edit/ProfileImgModal';
import ProfileEdit from '../components/Edit/ProfileEdit';
import NickNameEdit from '../components/Edit/NickNameEdit';
import KakaoEmail from '../components/Edit/KakaoEmail';
import EditButton from '../components/Edit/EditButton';
import AccountButton from '../components/Edit/AccountButton';
import AccountModal from '../components/Edit/AccountModal';
import { postLogoutApi } from '../apis/EditApi';
import { useNavigate } from 'react-router-dom';

export default function Setting() {
  const imgModalOpen = useRecoilValue(imgModalState);
  const [logoutModalOpen, setLogoutModalOpen] = useRecoilState(logoutModalState);
  const [withdrawModalOpen, setWithdrawModalOpen] = useRecoilState(withdrawModalState);
  const navigate = useNavigate();

  //로그아웃
  const logoutHandler = async () => {
    const data = await postLogoutApi();
    if (data.message === 'OK') {
      localStorage.removeItem('accessToken');
      setLogoutModalOpen(!logoutModalOpen);
      navigate('/login');
    }
  };

  //회원탈퇴
  const withdrawHandler = () => {
    setWithdrawModalOpen(!withdrawModalOpen);
  };

  return (
    <Container $nonescroll={logoutModalOpen || withdrawModalOpen || imgModalOpen}>
      {logoutModalOpen && (
        <AccountModal
          title="로그아웃을 진행할까요?"
          confirmText="네, 로그아웃할게요"
          cancelText="아니요"
          confirmHandler={logoutHandler}
          cancelHandler={() => setLogoutModalOpen(!logoutModalOpen)}
        />
      )}
      {withdrawModalOpen && (
        <AccountModal
          title="회원을 탈퇴하실 건가요?"
          confirmText="네, 탈퇴할게요"
          cancelText="조금 더 생각해 볼게요"
          confirmHandler={withdrawHandler}
          cancelHandler={() => setWithdrawModalOpen(!withdrawModalOpen)}
        />
      )}
      {imgModalOpen && <ProfileImgModal />}
      <Mobiletop pagename="계정관리" />
      <h1>계정 관리</h1>
      <ProfileEdit />
      <NickNameEdit />
      <KakaoEmail />
      <EditButton />
      <AccountButton />
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
    margin-top: 5.6rem;
    color: #181818;
    font-family: 'Noto Sans KR';
    font-size: 16px;
    font-weight: 600;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;
