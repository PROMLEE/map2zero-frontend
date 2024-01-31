import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { nickNameState } from '../../recoil';

const NickNameEdit = () => {
  const [nickname, setNickName] = useRecoilState(nickNameState);
  const MAX_LENGTH = 8; //글자수 제한

  //글자 수 계산 & 내용 저장 & 크기 조절
  const onInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > MAX_LENGTH) {
      event.target.value = event.target.value.slice(0, MAX_LENGTH);
    }
    const target = event.target.value;
    setNickName((prevState) => ({
      ...prevState,
      nickname: target,
      message: false,
    }));
  };

  const onEditHandler = () => {
    setNickName((prevState) => ({
      ...prevState,
      readonly: false,
    }));
  };

  return (
    <InputDiv $message={nickname.message}>
      <div>
        <input
          type="text"
          placeholder="닉네임을 입력해주세요. (최대 8글자)"
          maxLength={8}
          value={nickname.nickname}
          readOnly={nickname.readonly}
          onInput={onInputHandler}
        />
        <button onClick={onEditHandler} disabled={!nickname.readonly}>
          <img src={`${process.env.PUBLIC_URL}/assets/Edit/edit.svg`} alt="edit" />
        </button>
      </div>
      <p>중복된 닉네임입니다!</p>
    </InputDiv>
  );
};

export default NickNameEdit;

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
