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
    <Container>
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 5.6rem;
    color: #181818;
    font-family: 'Noto Sans';
    font-size: 16px;
    font-weight: 600;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;
