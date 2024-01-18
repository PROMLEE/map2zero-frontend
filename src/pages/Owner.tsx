import styled from 'styled-components';
import { InputField } from '../components/Owner';
import { useInput } from '../hooks/Owner';

const Owner = () => {
  const { inputs, onHandleChange } = useInput('default'); //배열 대신 객체로 반환
  const { title, addresses, businessLicenseNum, contact, ceoName } = inputs;
  //console.log(inputs);
  return (
    <Wrap>
      <Title>점주 신청하기</Title>

      <ContentWrap>
        <InputField
          id="title"
          label="상호명"
          placeholder="상호명을 입력해주세요"
          value={title}
          onChange={onHandleChange}
        />
        <InputField
          id="businessLicenseNum"
          label="사업자등록번호"
          placeholder="사업자등록번호를 입력해주세요"
          value={businessLicenseNum}
          onChange={onHandleChange}
        />

        <InputField label="매장주소" searchAddress={addresses} />

        <InputField
          id="contact"
          label="연락처"
          placeholder="연락처를 입력해주세요"
          value={contact}
          onChange={onHandleChange}
        />

        <InputField
          id="ceoName"
          label="대표명"
          placeholder="대표명을 입력해주세요"
          value={ceoName}
          onChange={onHandleChange}
        />
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
  @media (max-width: 768px) {
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
  @media (max-width: 768px) {
    width: 81.75rem;
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
  @media (max-width: 768px) {
    line-height: 12rem;
    height: 12rem;
    width: 81.75rem;
    font-size: 3.5rem;
    margin-top: 8.75rem;
    margin-bottom: 5rem;
  }
`;
