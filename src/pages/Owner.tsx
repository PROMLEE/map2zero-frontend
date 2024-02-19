import styled from 'styled-components';
import { InputField } from '../components/Owner';
import { useInput } from '../hooks/Owner';
import { useRecoilCallback } from 'recoil';
import { InputPostState } from '../recoil/Owner/ownerState';
import OwnerApi from '../apis/Owner/OwnerApi';

const Owner = () => {
  const { inputs, onHandleChange } = useInput('default'); //배열 대신 객체로 반환
  const { name, address, business_number, contact, representative } = inputs;

  const postOwner = useRecoilCallback(
    ({ snapshot, set }) =>
      async () => {
        // 현재 InputPostState 상태
        const currentAddressPostInfo = await snapshot.getPromise(InputPostState);

        //디테일 주소 포함 주소 최종 업데이트
        const updatedAddress = {
          ...currentAddressPostInfo,
          name: inputs.name,
          business_number: inputs.business_number,
          contact: inputs.contact,
          representative: inputs.representative,
          address: {
            ...currentAddressPostInfo.address,
            road_name: currentAddressPostInfo.address.road_name
              ? currentAddressPostInfo.address.road_name + ' ' + inputs.address.detailAddress
              : '',
            lot_number: currentAddressPostInfo.address.lot_number
              ? currentAddressPostInfo.address.lot_number + ' ' + inputs.address.detailAddress
              : '',
          },
        };
        set(InputPostState, updatedAddress);
        const Info = {
          store: updatedAddress,
        };
        OwnerApi(Info);
        console.log('Info', Info);
      },
    [inputs],
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postOwner();
  };

  return (
    <Wrap>
      <Title>점주 신청하기</Title>
      <OwnerForm onSubmit={handleSubmit}>
        <ContentWrap>
          <InputField
            id="name"
            label="상호명"
            placeholder="상호명을 입력해주세요"
            value={name}
            onChange={onHandleChange}
          />
          <InputField
            id="business_number"
            label="사업자등록번호"
            placeholder="사업자등록번호를 입력해주세요"
            value={business_number}
            onChange={onHandleChange}
          />
          <InputField label="매장주소" searchAddress={address} />

          <InputField
            id="contact"
            label="연락처"
            placeholder="연락처를 입력해주세요"
            value={contact}
            onChange={onHandleChange}
          />
          <InputField
            id="representative"
            label="대표명"
            placeholder="대표명을 입력해주세요"
            value={representative}
            onChange={onHandleChange}
          />
        </ContentWrap>
        <OwnerBtn type="submit">신청완료</OwnerBtn>
      </OwnerForm>
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
const OwnerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
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
