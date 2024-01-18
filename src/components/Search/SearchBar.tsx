import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { searchToggleState } from '../../recoil/searchToggleState';

type TSearchBarProps = {
  searchText: string;
  onInputSearchHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchHandler: () => void;
};

export const SearchBar: React.FC<TSearchBarProps> = ({ searchText, onInputSearchHandler, searchHandler }) => {
  const activeToggle = useRecoilValue(searchToggleState);

  return (
    <SearchWrap>
      <SearchInput
        type="text"
        value={searchText}
        placeholder={activeToggle === 0 ? '매장명을 검색해 주세요.' : '제품명을 검색해 주세요.'}
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
      <SearchImg src={`${process.env.PUBLIC_URL}/assets/Search/search.png`} alt="검색" onClick={searchHandler} />
    </SearchWrap>
  );
};

const SearchWrap = styled.div`
  display: flex;
  align-items: flex-end;
`;

const SearchInput = styled.input`
  margin-top: 1.6rem;
  border: none;
  width: 100%;
  border-bottom: 0.1rem solid #565656;
  padding-bottom: 5px;
  outline: none;
  color: #565656;

  font-family: 'Noto Sans KR';
  font-size: 1.6rem;
  font-weight: 510;

  &::placeholder {
    color: #e0e0e0;
  }

  @media (max-width: 768px) {
    margin-top: 4rem;
    font-size: 3.5rem;
  }
`;

const SearchImg = styled.img`
  padding: 5px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
