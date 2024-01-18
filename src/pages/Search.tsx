import React, { useState } from 'react';
import styled from 'styled-components';
import { SearchToggle } from '../components/Search/SearchToggle';
import { SearchBar } from '../components/Search/SearchBar';
import { RecentSearchList } from '../components/Search/RecentSearchList';
import { PopularSearchList } from '../components/Search/PopularSearchList';

export default function Search() {
  const [searchText, setSearchText] = useState('');
  const [searchResultView, setSearchResultView] = useState(false);

  //입력한 검색어 저장
  const onInputSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target.value;
    setSearchText(target);
  };

  //검색했을 때 이벤트
  const searchHandler = () => {
    if (searchText) {
      setSearchResultView(true);
    }
  };

  return (
    <Container>
      <LogoImg src={`${process.env.PUBLIC_URL}/assets/Search/logo.png`} alt="로고" />
      <SearchContainer>
        <SearchToggle />
        <SearchBar searchText={searchText} onInputSearchHandler={onInputSearchHandler} searchHandler={searchHandler} />
      </SearchContainer>
      {searchResultView ? (
        <div>결과 리스트 출력</div>
      ) : (
        <SearchList>
          <RecentSearchList />
          <PopularSearchList />
        </SearchList>
      )}
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
  width: 13.2rem;
  height: 10.3rem;
  margin-top: 8.6rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.4rem;
  width: 92.4rem;

  @media (max-width: 1000px) {
    width: 70rem;
  }

  @media (max-width: 768px) {
    margin-top: 6rem;
    width: 80.5rem;
  }
`;

const SearchList = styled.div`
  box-sizing: border-box;
  padding: 1.6rem;
  width: 92.4rem;

  @media (max-width: 1000px) {
    width: 70rem;
  }

  @media (max-width: 768px) {
    padding: 0;
    width: 80.5rem;
  }
`;
