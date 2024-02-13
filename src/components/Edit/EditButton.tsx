import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { nickNameState, profileImgState } from '../../recoil';
import { InfoState } from '../../recoil/Mypage/myPageState';
import { getNicknameInuseApi, patchNicknameApi } from '../../apis/EditApi';

const EditButton = () => {
  const info = useRecoilValue(InfoState);
  const [nickname, setNickName] = useRecoilState(nickNameState);
  const profileImg = useRecoilValue(profileImgState);

  //닉네임 중복 체크 및 편집 불가능하게 적용
  const onButtonHandler = async () => {
    const dataInuse = await getNicknameInuseApi(nickname.nickname);
    if (dataInuse.data) {
      setNickName((prevState) => ({
        ...prevState,
        message: true,
      }));
    } else {
      setNickName((prevState) => ({
        ...prevState,
        readonly: true,
      }));
      const data = await patchNicknameApi({ nickname: nickname.nickname });
      if (data.message === 'OK') {
        console.log('성공');
      }
    }
  };

  return (
    <Button
      disabled={nickname.nickname === '' || profileImg === '' || nickname.nickname === info.nickname}
      onClick={onButtonHandler}
    >
      적용
    </Button>
  );
};

export default EditButton;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 29.2rem;
  padding: 16px;
  margin-bottom: 24px;
  gap: 10px;
  border-radius: 8px;
  font-family: 'Noto Sans KR';
  font-size: 12px;
  font-weight: 600;
  background: #0b5c71;
  color: #fff;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 81.75rem;
  }

  &:disabled {
    background: #f2f2f2;
    color: #e0e0e0;
    cursor: auto;
  }
`;
