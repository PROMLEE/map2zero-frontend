import React from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { searchToggleState, searchTextState } from '../../recoil';

type TSearchBarProps = {
  searchHandler: (search: string) => void;
};

export const SearchBar: React.FC<TSearchBarProps> = ({ searchHandler }) => {
  const activeToggle = useRecoilValue(searchToggleState);
  const [searchText, setSearchText] = useRecoilState(searchTextState);

  //입력한 검색어 저장
  const onInputSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target.value;
    setSearchText(target);
  };

  return (
    <SearchWrap>
      <SearchInput
        type="text"
        value={searchText}
        placeholder={activeToggle === 0 ? '매장명을 검색해 주세요.' : '제품명을 검색해 주세요.'}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            if (searchText !== '') {
              searchHandler(searchText);
            }
          }
        }}
        spellCheck={false}
        onInput={onInputSearchHandler}
      />
      <SearchImg
        src={`${process.env.PUBLIC_URL}/assets/Search/search.svg`}
        alt="검색"
        onClick={() => searchHandler(searchText)}
      />
    </SearchWrap>
  );
};

const SearchWrap = styled.div`
  display: flex;
  align-items: flex-end;
`;

const SearchInput = styled.input`
  margin-top: 1.6rem;
  width: 100%;
  border-radius: 0;
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
