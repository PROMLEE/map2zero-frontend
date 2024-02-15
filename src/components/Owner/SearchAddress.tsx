import { useDaumPostcodePopup } from 'react-daum-postcode';
import { useState } from 'react';
import styled from 'styled-components';
import { InputPostState, AddressType } from '../../recoil/Owner/ownerTypes';
import { useInput } from '../../hooks/Owner';
import { useRecoilState } from 'recoil';

const SearchAddress = (address: AddressType) => {
  const { searchAddress, detailAddress } = address;
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const { inputs, setInputs, onHandleChange } = useInput('address');
  const [addressPostInfo, setAddressPostInfo] = useRecoilState(InputPostState);

  const scriptUrl = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';

  const open = useDaumPostcodePopup(scriptUrl);

  const handleComplete = (data: any) => {
    let { address, jibunAddress, sido, sigungu } = data;

    let road_name = address.replace(`${sido} ${sigungu} `, '');
    console.log(jibunAddress);
    let lot_number = jibunAddress.replace(`${sido} ${sigungu} `, '');

    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      address += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setAddressPostInfo({
      ...addressPostInfo,
      address: {
        ...addressPostInfo.address,
        province: sido,
        city: sigungu,
        road_name: road_name,
        lot_number: lot_number,
      },
    });

    setInputs({
      ...inputs,
      address: {
        ...inputs.address,
        searchAddress: address,
      },
    });

    isDisabled && setIsDisabled(false);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <>
      <AddressBtn onClick={handleClick}>우편번호찾기</AddressBtn>
      <AddressInput
        id="searchAddress"
        type="text"
        disabled={isDisabled}
        onChange={onHandleChange}
        value={searchAddress}
        required
      />
      <AddressInput
        id="detailAddress"
        type="text"
        placeholder="상세 주소 입력"
        onChange={onHandleChange}
        value={detailAddress}
      />
    </>
  );
};

export default SearchAddress;

const AddressBtn = styled.button`
  background-color: transparent;
  border-radius: 0.4rem;
  line-height: 3.2rem;
  height: 3.2rem;
  width: 16.4rem;
  text-align: center;
  color: rgba(255, 100, 100, 1);
  font-size: 1rem;
  border: 0.1rem solid rgba(255, 100, 100, 1);
  margin-bottom: 1rem;
  cursor: pointer;
  @media (max-width: 768px) {
    line-height: 8rem;
    height: 8rem;
    width: 26rem;
    font-size: 3.5rem;
    margin-bottom: 2.5rem;
    border-radius: 1rem;
    border-width: 0.25rem;
  }
`;

const AddressInput = styled.input`
  border: 0.1rem solid rgba(224, 224, 224, 1);
  border-radius: 0.4rem;
  padding: 1rem;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  background-color: ${(props) => (props.disabled ? '#F2F2F2' : 'white')};
  &::placeholder {
    color: rgba(224, 224, 224, 1);
  }
  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 2.5rem;
    margin-bottom: 2.5rem;
    font-size: 3.5rem;
    border-radius: 1rem;
    border-bottom-width: 0.25rem;
  }
`;
