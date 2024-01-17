import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { InputState } from '../recoil';
import SearchAddress from '../components/Owner/SearchAddress';

const Owner = () => {
  const [inputs, setInputs] = useRecoilState(InputState);

  const { title, addresses, businessLicenseNum, contact, ceoName } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInputs({
      ...inputs,
      [id]: value,
    });
  };

  //console.log(inputs);
  return (
    <Wrap>
      <Title>점주 신청하기</Title>

      <ContentWrap>
        <OwnerLabel htmlFor="title">상호명</OwnerLabel>
        <OwnerInput type="text" id="title" placeholder="상호명을 입력해주세요" onChange={onChange} value={title} />
        <OwnerLabel htmlFor=" businessLicenseNum">사업자등록번호</OwnerLabel>
        <OwnerInput
          type="text"
          id="businessLicenseNum"
          placeholder="상호명을 입력해주세요"
          onChange={onChange}
          value={businessLicenseNum}
        />
        <OwnerLabel>매장주소</OwnerLabel>
        <SearchAddress {...addresses} />
        <OwnerLabel htmlFor=" contact">연락처</OwnerLabel>
        <OwnerInput type="text" id=" contact" placeholder="연락처를 입력해주세요" onChange={onChange} value={contact} />
        <OwnerLabel htmlFor=" ceoName">대표명</OwnerLabel>
        <OwnerInput type="text" id="ceoName" placeholder="대표명을 입력해주세요" onChange={onChange} value={ceoName} />
      </ContentWrap>
      <OwnerBtn>신청완료</OwnerBtn>
    </Wrap>
  );
};

export default Owner;

const Wrap = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.6rem;
  margin: 6rem 0 1rem 0;
  @media (max-width: 480px) {
    display: none;
  }
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 92.4rem;
  @media all and (min-width: 768px) and (max-width: 1000px) {
    width: 90%;
  }
  @media (max-width: 480px) {
    width: 81.75rem;
  }
`;
const OwnerLabel = styled.label`
  font-size: 1.4rem;
  padding-left: 0.8rem;
  padding: 0 0 1.6rem 0.8rem;
  margin-top: 4.7rem;
  @media (max-width: 480px) {
    font-size: 3.5rem;
    padding-left: 2rem;
    padding: 0 0 4rem 2rem;
    margin-top: 6rem;
  }
`;
const OwnerInput = styled.input`
  border: none;
  border-bottom: 0.2rem solid rgba(224, 224, 224, 1);
  padding: 0 0 1.6rem 0.8rem;
  font-size: 1.4rem;
  &::placeholder {
    color: rgba(224, 224, 224, 1);
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 480px) {
    padding: 0 0 4rem 2rem;
    border-bottom-width: 0.25rem;
    font-size: 3.5rem;
  }
`;

const OwnerBtn = styled.button`
  background-color: #0b5c71;
  border-radius: 8px;
  line-height: 4.8rem;
  height: 4.8rem;
  width: 34.8rem;
  text-align: center;
  color: white;
  font-size: 1.2rem;
  font-weight: bolder;
  margin-top: 6rem;
  margin-bottom: 2rem;
  cursor: pointer;
  @media (max-width: 480px) {
    line-height: 12rem;
    height: 12rem;
    width: 81.75rem;
    font-size: 3.5rem;
    margin-top: 8.75rem;
    margin-bottom: 5rem;
  }
`;
