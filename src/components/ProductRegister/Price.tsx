import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { ProductAdd } from '../../recoil/Products/Products';
import { useState } from 'react';

interface UnitProps {
  num: number;
  setnum: React.Dispatch<React.SetStateAction<number>>;
}
const text = ['개', '100ml', '1L', '100g', '1Kg'];

export const DropdownList = ({ setnum }: UnitProps) => {
  return (
    <ul>
      {text.map((li, i) => (
        <DropdownText
          key={i}
          onClick={() => {
            setnum(i);
          }}
        >
          / {li}
        </DropdownText>
      ))}
    </ul>
  );
};

export const Dropdown = ({ num, setnum }: UnitProps) => {
  const [isDropdownView, setDropdownView] = useState(false);
  const handleClickContainer = () => {
    setDropdownView(!isDropdownView);
  };

  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(false);
    }, 200);
  };
  return (
    <ProductDropbox onBlur={handleBlurContainer}>
      <label onClick={handleClickContainer}>
        <DropdownButton $isDropdownopen={isDropdownView}>
          / {text[num]}
          <img
            src={
              isDropdownView
                ? `${process.env.PUBLIC_URL}/assets/ProductList/uparrow.svg`
                : `${process.env.PUBLIC_URL}/assets/ProductList/downarrow.svg`
            }
          ></img>
        </DropdownButton>
      </label>
      {isDropdownView && <DropdownList {...{ num: num, setnum: setnum }} />}
    </ProductDropbox>
  );
};
export const Price = () => {
  const [values, setValues] = useRecoilState(ProductAdd);
  const [isPrice, setisPrice] = useState(false);
  // const [num, setnum] = useState(0);
  const onInputHandler = (e: any) => {
    setValues({ ...values, price: e.target.value });
    e.target.value ? setisPrice(true) : setisPrice(false);
  };

  return (
    <Namebox>
      <TextBox placeholder=", 없이 숫자만 작성해 주세요" onChange={onInputHandler} type="number"></TextBox>
      {isPrice ? <Won>원</Won> : null}
      {/* <Dropdown {...{ num: num, setnum: setnum }} /> */}
    </Namebox>
  );
};

const Namebox = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  margin-top: 1.4rem;
  margin-left: 6.4rem;
`;
const TextBox = styled.input`
  width: 70%;
  padding-bottom: 1rem;
  border-bottom: 0.5px solid #e0e0e0;
  font-size: 1rem;
  outline: none;
  &::placeholder {
    color: #e0e0e0;
    font-weight: 400;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    padding-bottom: 2.5rem;
    margin-top: 3.5rem;
  }
`;
const Won = styled.div`
  width: 1rem;
  font-size: 1.4rem;
  font-weight: 800;
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const ProductDropbox = styled.div`
  height: 100%;
  margin-left: 3rem;
  width: 8rem;
  height: 2.9rem;
  @media (max-width: 768px) {
    margin-left: 8rem;
    width: 18rem;
    height: 8rem;
    font-size: 4rem;
  }
`;
const DropdownButton = styled.button<{ $isDropdownopen: boolean }>`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => (props.$isDropdownopen ? '#F2F2F2' : 'transparent')};
  align-items: center;
  width: 100%;
  height: 100%;
  align-self: stretch;
  font-size: 1.4rem;
  padding: 1rem;
  color: #ff6464;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    font-size: 4rem;
    height: 8rem;
  }
`;
const DropdownText = styled.li`
  position: relative;
  background-color: #fff;
  text-align: center;
  padding: 0.8rem;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  height: 100%;
  &:hover {
    cursor: pointer;
    background-color: #f2f2f2;
  }
  @media (max-width: 768px) {
    padding: 2rem;
    font-size: 2.5rem;
    width: 100%;
    height: 8rem;
  }
`;
