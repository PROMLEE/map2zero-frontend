import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { Mobiletop } from '../components';
import { useRecoilState } from 'recoil';
import { imgModalState } from '../recoil';
import ImgModal from '../components/Modal/ImgModal';

export default function NickName() {
  const DEFAULT_IMG = `${process.env.PUBLIC_URL}/assets/NickName/profile.png`;
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(DEFAULT_IMG);

  const [nickname, setNickName] = useState('');
  const MAX_LENGTH = 8; //글자수 제한
  const [message, setMessage] = useState(false); //중복 경고 메시지
  const [readOnly, setReadOnly] = useState(false);
  const [modalOpen, setModalOpen] = useRecoilState(imgModalState);

  const modalHandler = () => {
    setModalOpen(!modalOpen);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    //setPreview();
  };

  const handleUpload = async () => {
    // if (selectedFile) {
    //   const formData = new FormData();
    //   formData.append('file', selectedFile);
    // }
  };

  //글자 수 계산 & 내용 저장 & 크기 조절
  const onInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > MAX_LENGTH) {
      event.target.value = event.target.value.slice(0, MAX_LENGTH);
    }
    const target = event.target.value;
    setNickName(target);
    setMessage(false);
  };

  const onButtonHandler = () => {
    if (nickname === '중복') {
      setMessage(true);
    }
    setReadOnly(true);
  };

  const onEditHandler = () => {
    setReadOnly(false);
  };

  return (
    <Container>
      <ImgModal />
      <Mobiletop pagename="닉네임 설정" />
      <h1>닉네임 설정</h1>
      <ImageDiv>
        {preview && <ProfileImg src={preview} alt="preview" />}
        <input style={{ display: 'none' }} id="imageInput" onChange={handleFileChange} />
        <label htmlFor="imageInput" onClick={modalHandler}>
          <img src={`${process.env.PUBLIC_URL}/assets/NickName/plus.svg`} alt="plus" />
        </label>
      </ImageDiv>
      <InputDiv $message={message}>
        <div>
          <input
            type="text"
            placeholder="닉네임을 입력해주세요. (최대 8글자)"
            maxLength={8}
            value={nickname}
            readOnly={readOnly}
            onInput={onInputHandler}
          />
          <button onClick={onEditHandler} disabled={!readOnly}>
            <img src={`${process.env.PUBLIC_URL}/assets/NickName/edit.svg`} alt="edit" />
          </button>
        </div>
        <p>중복된 닉네임입니다!</p>
      </InputDiv>
      <KakaoDiv>
        <Kakao>
          <img src={`${process.env.PUBLIC_URL}/assets/NickName/kakao.svg`} alt="kakao" />
        </Kakao>
        <span>계정아이디@mail.com</span>
      </KakaoDiv>
      <Button disabled={nickname === ''} onClick={onButtonHandler}>
        적용
      </Button>
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

const ProfileImg = styled.img`
  width: 15.8rem;
  height: 15.8rem;
  border-radius: 100px;

  @media (max-width: 768px) {
    width: 37.75rem;
    height: 37.75rem;
  }
`;

const ImageDiv = styled.div`
  margin-top: 8rem;
  position: relative;

  @media (max-width: 768px) {
    margin-top: 24rem;
  }

  label {
    position: absolute;
    bottom: 0.5rem;
    right: 0.3rem;
    width: 30px;
    height: 30px;
    padding: 8px;
    border-radius: 100px;
    background: #fff;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
`;

const InputDiv = styled.div<{ $message: boolean }>`
  margin-top: 6.4rem;
  width: 29.2rem;

  @media (max-width: 768px) {
    margin-top: 20rem;
    width: 81.75rem;
  }

  div {
    padding-right: 8px;
    padding-bottom: 8px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${(props) => (props.$message ? '#FF6464' : '#f2f2f2')};

    > input {
      width: 230px;
      outline: none;

      &::placeholder {
        color: #e0e0e0;
        font-family: 'Noto Sans';
        font-size: 14px;
        font-weight: 400;
      }
    }

    > button {
      background: none;
      cursor: pointer;

      &:disabled {
        cursor: auto;
      }
    }
  }

  p {
    color: #ff6464;
    font-family: 'Noto Sans';
    font-size: 10px;
    font-weight: 400;
    margin-top: 4px;
    margin-bottom: 14px;
    visibility: ${(props) => (props.$message ? 'visible' : 'hidden')};
  }
`;

const KakaoDiv = styled.div`
  margin-bottom: 6.4rem;
  display: flex;
  width: 29.2rem;
  padding: 8px;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid #f2f2f2;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 81.75rem;
    margin-bottom: 7.75rem;
  }

  span {
    overflow: hidden;
    color: #565656;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: 'Noto Sans';
    font-size: 10px;
    font-weight: 400;
  }
`;

const Kakao = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background: #fee500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`;

const Button = styled.button`
  display: flex;
  width: 29.2rem;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  font-family: 'Noto Sans';
  font-size: 12px;
  font-weight: 600;
  background: #0b5c71;
  color: #fff;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 81.75rem;
    margin-bottom: 7.75rem;
  }

  &:disabled {
    background: #f2f2f2;
    color: #e0e0e0;
    cursor: auto;
  }
`;
