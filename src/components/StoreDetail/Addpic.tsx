import { useState } from 'react';
import styled from 'styled-components';

export const Addpic = () => {
  let [inputCount, setInputCount] = useState(0);
  const onInputHandler = (e: any) => {
    setInputCount(e.target.value.length);
  };

  return (
    <ReviewBox>
      <TextBox placeholder="최대 100자(띄어쓰기 포함)" onChange={onInputHandler} maxLength={100} />
      <Textcount>{inputCount}/100</Textcount>
    </ReviewBox>
  );
};

const ReviewBox = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: flex-start;
`;
const TextBox = styled.textarea`
  width: 90%;
  height: 30rem;
  padding: 4rem;
  margin-left: 6rem;
  margin-top: 3.5rem;
  border-radius: 2rem;
  border: 0.5px solid #e0e0e0;
  background: #f2f2f2;
  resize: none;
  font-family: 'Noto Sans KR';
  font-size: 2.5rem;
  &::placeholder {
    color: #848484;
    font-weight: 400;
  }
`;
const Textcount = styled.div`
  width: 90%;
  height: 6.5rem;
  margin-left: 6rem;
  padding: 2rem;
  color: #e0e0e0;
  text-align: right;
  font-family: 'Noto Sans KR';
  font-size: 2rem;
`;
