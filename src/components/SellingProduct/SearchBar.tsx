import React from 'react';
import styled from 'styled-components';

type TSearchBarProps = {
  searchText: string;
  onInputSearchHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchHandler: () => void;
};

export const SearchBar: React.FC<TSearchBarProps> = ({ searchText, onInputSearchHandler, searchHandler }) => {
  return (
    <SearchWrap>
      <SearchInput
        type="text"
        value={searchText}
        placeholder="제품 검색"
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            if (searchText !== '') {
              searchHandler();
            }
          }
        }}
        spellCheck={false}
        onInput={onInputSearchHandler}
      />
      <SearchImg src={`${process.env.PUBLIC_URL}/assets/Navbar/searchimg.svg`} alt="검색" onClick={searchHandler} />
    </SearchWrap>
  );
};

const SearchWrap = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: flex;
`;

const SearchInput = styled.input`
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 1.36rem;
  outline: none;
  color: #000;
  font-size: 1.4rem;
  font-family: 'Noto Sans KR';
  font-weight: 500;
  &::placeholder {
    font-size: 1.6rem;
    color: #e0e0e0;
  }
  @media (max-width: 768px) {
    font-size: 3.2rem;
    &::placeholder {
      font-size: 3.5rem;
    }
  }
`;

const SearchImg = styled.img`
  padding: 0.5rem;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 7.5rem;
    height: 7.5rem;
    padding: 1.5rem;
  }
`;
