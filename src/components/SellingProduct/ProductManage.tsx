import { useState } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

interface Props {
  product: string;
  price: string;
  imgurl: string;
  code: number;
}

const Selling = atom<boolean>({
  key: 'Selling',
  default: true,
});

export const DropdownList = () => {
  const text = ['판매중', '품절'];
  const setselling = useSetRecoilState(Selling);
  return (
    <ul>
      {text.map((li, i) => (
        <DropdownText
          key={i}
          onClick={() => {
            setselling(i === 0 ? true : false);
          }}
        >
          {li}
        </DropdownText>
      ))}
    </ul>
  );
};

export const Dropdown = () => {
  const [isDropdownView, setDropdownView] = useState(false);
  const selling = useRecoilValue(Selling);
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
          {selling ? '판매중 ' : '품절 '}
          <img
            src={
              isDropdownView
                ? `${process.env.PUBLIC_URL}/assets/ProductList/uparrow.svg`
                : `${process.env.PUBLIC_URL}/assets/ProductList/downarrow.svg`
            }
          ></img>
        </DropdownButton>
      </label>
      {isDropdownView && <DropdownList />}
    </ProductDropbox>
  );
};
export const ProductManage = ({ product, price, imgurl, code }: Props) => {
  return (
    <Box>
      <ProductImg src={imgurl} alt={product} />
      <ProductName>{product}</ProductName>
      <BottomBox>
        <ProductPrice>{price}</ProductPrice>
        <Dropdown />
      </BottomBox>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 21.2rem;
  height: 26.7rem;
  align-items: flex-start;
  border-radius: 0.8rem;
  border: 0.5px solid #f2f2f2;
  @media (max-width: 768px) {
    margin-bottom: 4rem;
    width: 49%;
    height: 51.5rem;
  }
`;
const ProductImg = styled.img`
  width: 21.2rem;
  height: 21.2rem;
  background-color: #d9d9d9;
  border-radius: 0.8rem 0.8rem 0 0;
  @media (max-width: 768px) {
    width: 100%;
    height: 37.75rem;
  }
`;

const ProductName = styled.div`
  padding-left: 0.8rem;
  padding-top: 0.8rem;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media (max-width: 768px) {
    padding-left: 2rem;
    padding-top: 2rem;
    font-size: 3rem;
  }
`;
const BottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 2.9rem;
  width: 100%;
  @media (max-width: 768px) {
    font-size: 2.5rem;
    height: 7.1rem;
  }
`;
const ProductPrice = styled.div`
  height: 2.9rem;
  align-self: stretch;
  font-size: 1rem;
  padding: 0.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 768px) {
    padding: 2rem;
    font-size: 2.5rem;
    height: 7.1rem;
  }
`;
const ProductDropbox = styled.div`
  height: 100%;
  width: 6.4rem;
  height: 2.9rem;
  @media (max-width: 768px) {
    width: 15rem;
    height: 7.1rem;
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
  font-size: 1rem;
  padding: 0.8rem;
  color: #ff6464;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    font-size: 2.5rem;
    height: 7.1rem;
    width: 15rem;
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
  width: 6.4rem;
  height: 2.9rem;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    font-size: 2.5rem;
    width: 15rem;
    height: 7.1rem;
  }
`;
