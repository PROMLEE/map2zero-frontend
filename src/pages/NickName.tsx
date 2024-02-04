import styled from 'styled-components';
import { Mobiletop } from '../components';
import ProfileImgModal from '../components/Edit/ProfileImgModal';
import ProfileEdit from '../components/Edit/ProfileEdit';
import NickNameEdit from '../components/Edit/NickNameEdit';
import KakaoEmail from '../components/Edit/KakaoEmail';
import EditButton from '../components/Edit/EditButton';
import { useRecoilValue } from 'recoil';
import { imgModalState } from '../recoil';

export default function NickName() {
  const modalOpen = useRecoilValue(imgModalState);

  return (
    <Container $nonescroll={modalOpen}>
      {modalOpen && <ProfileImgModal />}
      <Mobiletop pagename="닉네임 설정" />
      <h1>닉네임 설정</h1>
      <ProfileEdit />
      <NickNameEdit />
      <KakaoEmail />
      <EditButton />
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

  h1 {
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
