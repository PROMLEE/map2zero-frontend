import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { nickNameState, appliedprofileImgState } from '../../recoil';
import { InfoState } from '../../recoil/Mypage/myPageState';
import { getNicknameInuseApi, patchNicknameApi } from '../../apis/EditApi';
import { putPhotosApi } from '../../apis/EditApi';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EditButton = () => {
  const info = useRecoilValue(InfoState);
  const [nickname, setNickName] = useRecoilState(nickNameState);
  const appliedImg = useRecoilValue(appliedprofileImgState);
  const [change, setChange] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (nickname.nickname !== info.nickname) {
      setChange(true);
    } else if (appliedImg != null) {
      setChange(true);
    } else {
      setChange(false);
    }

    if (nickname.nickname === '') {
      setChange(false);
      return;
    }
  }),
    [nickname.nickname, appliedImg];

  //닉네임 중복 체크 및 편집 불가능하게 적용
  const onButtonHandler = async () => {
    if (nickname.nickname !== info.nickname) {
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
          goPathHandler();
        }
      }
    }
    if (appliedImg) {
      const formData = new FormData();
      formData.append('request', new Blob([JSON.stringify({ default: false })], { type: 'application/json' }));
      formData.append('image', appliedImg);

      const data = await putPhotosApi(formData);
      if (data.message === 'OK') {
        goPathHandler();
      }
    }
  };

  const goPathHandler = () => {
    console.log(location.pathname);
    if (location.pathname === '/nickname') {
      navigate('/');
    }

    if (location.pathname === '/setting') {
      navigate('/mypage');
    }
  };

  return (
    <Button disabled={!change} onClick={onButtonHandler}>
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
