import React, { useState } from 'react';
import styled from 'styled-components';
import { SearchToggle } from '../components/Search/SearchToggle';
import { SearchBar } from '../components/Search/SearchBar';
import { RecentSearchList } from '../components/Search/RecentSearchList';
import { PopularSearchList } from '../components/Search/PopularSearchList';

export default function Search() {
  const [searchToggle, setSearchToggle] = useState(0); //0: 매장명, 1: 제품명
  const [searchToggleText, setSearchToggleText] = useState('매장명');
  const [searchText, setSearchText] = useState('');

  //매장명, 제품명 선택
  const toggleFn = (toggleId: number) => {
    setSearchToggle(toggleId);
    if (toggleId === 0) {
      setSearchToggleText('매장명');
    } else {
      setSearchToggleText('제품명');
    }
  };

  //입력한 검색어 저장
  const onInputSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target.value;
    setSearchText(target);
  };

  //검색했을 때 이벤트
  const SearchHandler = () => {
    console.log(searchText);
  };

  return (
    <Container>
      <LogoImg src="assets/logo.png" alt="로고" />
      <SearchContainer>
        <SearchToggle activeToggle={searchToggle} toggleFn={toggleFn} />
        <SearchBar
          searchToggleText={searchToggleText}
          searchText={searchText}
          onInputSearchHandler={onInputSearchHandler}
          SearchHandler={SearchHandler}
        />
      </SearchContainer>
      <SearchList>
        <RecentSearchList />
        <PopularSearchList />
      </SearchList>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 132px;
  height: 103px;
  margin-top: 80px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;

  @media (max-width: 768px) {
    align-items: center;
    margin-top: 16px;
  }
`;

const SearchList = styled.div`
  box-sizing: border-box;
  width: 684px;
  padding: 16px;

  @media (max-width: 768px) {
    width: 322px;
    padding: 0;
  }
`;
