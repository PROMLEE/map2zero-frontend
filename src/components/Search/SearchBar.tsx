import React from 'react';
import styled from 'styled-components';

type TSearchBarProps = {
  searchToggleText: string;
  searchText: string;
  onInputSearchHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  SearchHandler: () => void;
};

export const SearchBar: React.FC<TSearchBarProps> = ({
  searchToggleText,
  searchText,
  onInputSearchHandler,
  SearchHandler,
}) => {
  return (
    <SearchWrap>
      <SearchInput
        type="text"
        value={searchText}
        placeholder={searchToggleText + '을 검색해 주세요.'}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            if (searchText !== '') {
              SearchHandler();
            }
          }
        }}
        spellCheck={false}
        onInput={onInputSearchHandler}
      />
      <SearchImg src="assets/search.png" alt="검색" onClick={SearchHandler} />
    </SearchWrap>
  );
};

const SearchWrap = styled.div`
  display: flex;
  align-items: flex-end;
`;

const SearchInput = styled.input`
  margin-top: 12px;
  width: 652px;
  border: none;
  border-bottom: 1px solid #565656;
  padding-bottom: 5px;
  outline: none;
  color: #0b5c71;

  font-size: 16px;
  font-weight: 510;

  &::placeholder {
    color: #e0e0e0;
  }

  @media (max-width: 768px) {
    margin-top: 16px;
    width: 296px;
    font-size: 14px;
  }
`;

const SearchImg = styled.img`
  padding: 5px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
