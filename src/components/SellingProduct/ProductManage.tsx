import { useState } from 'react';
import styled from 'styled-components';
import { ProductsSale } from '../../apis/SellingProduct/Products';
interface Props {
  name: string;
  price: string;
  photo: { url: string };
  on_sale: boolean;
  id: number;
}

interface saleProps {
  id: number;
  onsale: boolean;
  setonsale: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DropdownList = ({ id, setonsale }: saleProps) => {
  const text = ['판매중', '품절'];
  const ButtonClick = async (i: number) => {
    console.log(id);
    setonsale(i === 0 ? true : false);
    await ProductsSale({ store_product_id: id, on_sale: i === 0 ? true : false });
  };
  return (
    <ul>
      {text.map((li, i) => (
        <DropdownText
          key={i}
          onClick={() => {
            ButtonClick(i);
          }}
        >
          {li}
        </DropdownText>
      ))}
    </ul>
  );
};

export const Dropdown = ({ onsale, setonsale, id }: saleProps) => {
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
          {onsale ? '판매중 ' : '품절 '}
          <img
            src={
              isDropdownView
                ? `${process.env.PUBLIC_URL}/assets/ProductList/uparrow.svg`
                : `${process.env.PUBLIC_URL}/assets/ProductList/downarrow.svg`
            }
          ></img>
        </DropdownButton>
      </label>
      {isDropdownView && <DropdownList {...{ onsale: onsale, setonsale: setonsale, id: id }} />}
    </ProductDropbox>
  );
};
export const ProductManage = ({ name, price, photo, on_sale, id }: Props) => {
  const [onsale, setonsale] = useState(on_sale);
  return (
    <Box>
      <ProductImg src={photo.url} alt={name} />
      <ProductName>{name}</ProductName>
      <BottomBox>
        <ProductPrice>{price}</ProductPrice>
        <Dropdown {...{ onsale: onsale, setonsale: setonsale, id: id }} />
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
