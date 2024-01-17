import React from 'react';
import styled from 'styled-components';
import { AddressesType } from '../../recoil/Owner/ownerTypes';
import { SearchAddress } from './index';

type InputFieldType = {
  id?: string;
  label: string;
  placeholder?: string;
  value?: string | undefined | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  searchAddress?: AddressesType;
};
const InputField = ({ id, label, placeholder, value, onChange, searchAddress }: InputFieldType) => {
  return (
    <>
      <OwnerLabel htmlFor={id}>{label}</OwnerLabel>
      {searchAddress ? (
        <SearchAddress {...searchAddress} />
      ) : (
        <OwnerInput type="text" id={id} placeholder={placeholder} onChange={onChange} value={value} />
      )}
    </>
  );
};

export default InputField;

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
