import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SearchToggle } from '../components/Search/SearchToggle';
import { SearchBar } from '../components/Search/SearchBar';
import { RecentSearchList } from '../components/Search/RecentSearchList';
import { PopularSearchList } from '../components/Search/PopularSearchList';
import { Mobiletop } from '../components';
import { SearchResultList } from '../components/SearchFile/SearchResultList';
import NoSearchFile from '../components/SearchFile/NoSearchFile';
import { getSearchApi } from '../apis/SearchApi';
import { useRecoilState, useRecoilValue } from 'recoil';
import { searchToggleState, searchResultState, searchTextState, UserInfoState } from '../recoil';

export default function Search() {
  const [searchResultView, setSearchResultView] = useState(false);
  const activeToggle = useRecoilValue(searchToggleState);
  const searchText = useRecoilValue(searchTextState);
  const [searchResult, setSearchResult] = useRecoilState(searchResultState);
  const user = useRecoilValue(UserInfoState);
  useEffect(() => {
    if (searchResultView) {
      searchHandler(searchText);
    }
  }, [activeToggle]);

  //검색했을 때 이벤트
  const searchHandler = async (search: string) => {
    if (search) {
      const data = await getSearchApi(`?keyword=${search}&type=${activeToggle === 0 ? 'STORE' : 'PRODUCT'}&size=300`);
      setSearchResult(data.data);
      setSearchResultView(true);
    } else {
      setSearchResultView(false);
    }
  };

  return (
    <Container>
      <Mobiletop pagename="검색" />
      <LogoImg src={`${process.env.PUBLIC_URL}/assets/Navbar/logo.png`} alt="로고" />
      <SearchContainer>
        <SearchToggle />
        <SearchBar searchHandler={searchHandler} />
      </SearchContainer>
      {searchResultView ? (
        <div>{searchResult.length > 0 ? <SearchResultList /> : <NoSearchFile />}</div>
      ) : (
        <SearchList>
          {user.islogin && <RecentSearchList searchHandler={searchHandler} />}
          <PopularSearchList />
        </SearchList>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
