import React, { useState } from 'react';
import styled from 'styled-components';
import {} from '../../recoil';
import { SearchDummy } from './SearchDummy';
import { useRecoilValue } from 'recoil';
import { searchResultState } from '../../recoil';

export const SearchResultList = () => {
  const searchResult = useRecoilValue(searchResultState);
  const [clickedIds, setClickedIds] = useState<Record<string, boolean>>({}); // 초기에는 클릭된 아이콘 ID x

  const handleClick = (id: number) => {
    setClickedIds((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  return (
    <SearchResultContainer>
      {searchResult.map((i) => (
        <Container key={i.id}>
          <SearchText>{i.name}</SearchText>
          <ProductText>
            {i.products.map((data) => {
              return <div key={data.id}>{data.name}</div>;
            })}
          </ProductText>
          <AddressFrame>
            <AddressText>
              {i.address.province + ' ' + i.address.city + ' ' + i.address.road_name + ' ' + i.address.lot_number}
            </AddressText>
            <NumReview>
              <StarReview src={`${process.env.PUBLIC_URL}assets/Search/greenstar.png`} alt="초록별아이콘" />
              <StarReview src={`${process.env.PUBLIC_URL}assets/Search/greenstar.png`} alt="초록별아이콘" />
              <StarReview src={`${process.env.PUBLIC_URL}assets/Search/greenstar.png`} alt="초록별아이콘" />
              <StarReview src={`${process.env.PUBLIC_URL}assets/Search/graystar.png`} alt="회색별아이콘" />
              <StarReview src={`${process.env.PUBLIC_URL}assets/Search/graystar.png`} alt="회색별아이콘" />
              <p>(42)</p>
            </NumReview>
          </AddressFrame>
          <StoreFrame>
            <StoreImg src={`${process.env.PUBLIC_URL}assets/Search/${i.photo}`} alt={i.name} />
            {/* photo 값 없어서 나중에 수정 필요 ->i.photo.url */}
          </StoreFrame>
          <BookMarkFrame>
            <BookMarkIcon
              src={
                i.bookmarked
                  ? `${process.env.PUBLIC_URL}/assets/Search/fullbookmark.png`
                  : `${process.env.PUBLIC_URL}/assets/Search/emptybookmark.png`
              }
              alt="북마크아이콘"
              onClick={() => handleClick(i.id)}
            />
          </BookMarkFrame>
        </Container>
      ))}
    </SearchResultContainer>
  );
};

const SearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 48px;
`;

const Container = styled.div`
  width: 924px;
  height: 162px;
  position: relative;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  border: 1px #f2f2f2 solid;
  margin-bottom: 24px;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    background-color: lightgray;
  }

  @media (max-width: 768px) {
    width: 327px;
    height: 128px;
    margin: 24px;

    // 미디어 쿼리 내부에서 hover 효과를 초기화
    &:hover {
      transform: none;
    }
  }
`;

const SearchText = styled.div`
  left: 178px;
  top: 13px;
  position: absolute;
  color: #0b5c71;
  font-size: 16px;
  font-family: Noto Sans KR;
  font-weight: 500;
  word-wrap: break-word;

  @media (max-width: 768px) {
    left: 143px;
  }
`;

const ProductText = styled.div`
  left: 178px;
  top: 43px;
  position: absolute;
  color: #565656;
  font-size: 12px;
  font-family: Noto Sans KR;
  font-weight: 400;
  word-wrap: break-word;

  @media (max-width: 768px) {
    left: 143px;
  }
`;

const AddressFrame = styled.div`
  left: 178px;
  top: 106px;
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  display: inline-flex;

  @media (max-width: 768px) {
    left: 143px;
    top: 70px;
  }
`;

const AddressText = styled.div`
  color: #565656;
  font-size: 10px;
  font-family: Noto Sans KR;
  font-weight: 400;
  word-wrap: break-word;

  @media (max-width: 768px) {
    left: 143px;
    margin-top: 8px;
  }
`;

const NumReview = styled.div`
  height: 20px;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;

  & > p {
    color: #e0e0e0;
    font-family: Noto Sans KR;
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: right;
  }
`;

const StarReview = styled.img`
  width: 12px;
  height: 12px;

  @media (max-width: 768px) {
    width: 127px;
  }
`;

const StoreFrame = styled.div`
  width: 162px;
  height: 162px;
  left: 0;
  top: 0;
  position: absolute;
  background: white;

  @media (max-width: 768px) {
    width: 127px;
    height: 128px;
  }
`;

const StoreImg = styled.img`
  width: 162px;
  height: 162px;
  left: 0;
  top: 0;
  position: absolute;
  background: #d9d9d9;

  @media (max-width: 768px) {
    width: 127px;
    height: 128px;
  }
`;

const BookMarkFrame = styled.div`
  padding: 16px;
  left: 880px;
  top: 0;
  position: absolute;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;
  display: inline-flex;

  @media (max-width: 768px) {
    padding: 16px;
    left: 283px;
    top: 0;
    position: absolute;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    display: inline-flex;
  }
`;

const BookMarkIcon = styled.img`
  width: 11.72px;
  height: 15px;
`;
