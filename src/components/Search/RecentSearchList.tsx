import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { searchTextState } from '../../recoil';
import { getRecentSearchApi, deleteSingleRecentSearchApi, deleteAllRecentSearchApi } from '../../apis/SearchApi';

export type TgetRecentSearchResponse = {
  id: number;
  keyword: string;
};

export type TsearchHandler = {
  searchHandler: (search: string) => void;
};

export const RecentSearchList: React.FC<TsearchHandler> = ({ searchHandler }) => {
  const [recentSearch, setRecentSearch] = useState<TgetRecentSearchResponse[]>([]);
  const [searchText, setSearchText] = useRecoilState(searchTextState);

  useEffect(() => {
    recentSearchList();
  }, []);

  const recentSearchList = async () => {
    const data = await getRecentSearchApi();
    if (data) {
      setRecentSearch(data.data);
    }
  };

  //최근 검색어 모두 지우기
  const allClear = async () => {
    if (recentSearch) {
      const data = await deleteAllRecentSearchApi();
      if (data) {
        setRecentSearch([]);
      }
    }
  };

  //특정 최근 검색어 지우기
  const itemClear = async (itemId: number) => {
    if (recentSearch) {
      const data = await deleteSingleRecentSearchApi({ data: { id: itemId } });
      if (data.message === 'OK') {
        const newTags = recentSearch.filter((item) => item.id !== itemId);
        setRecentSearch(newTags);
      }
    }
  };

  return (
    <ListWrap>
      <SearchHead>
        <h1>최근 검색어</h1>
        <button onClick={allClear}>모두 지우기</button>
      </SearchHead>
      <TagsWrap>
        {recentSearch.length > 0 ? (
          recentSearch.map((item) => {
            return (
              <TagItem key={item.id}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/Search/delete.svg`}
                  alt="삭제"
                  onClick={() => itemClear(item.id)}
                />
                <span
                  onClick={() => {
                    setSearchText(item.keyword);
                    searchHandler(item.keyword);
                  }}
                >
                  {item.keyword.length > 13 ? item.keyword.slice(0, 13) + '...' : item.keyword}
                </span>
              </TagItem>
            );
          })
        ) : (
          <>최근 검색어 없음</>
        )}
      </TagsWrap>
    </ListWrap>
  );
};

const ListWrap = styled.div`
  margin-top: 8rem;
`;

const SearchHead = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    color: #000;
    text-align: center;
    font-family: 'Noto Sans KR';
    font-size: 14px;
    font-weight: 500;
  }

  button {
    color: #565656;
    font-family: 'Noto Sans KR';
    font-size: 10px;
    font-weight: 400;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

const TagsWrap = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 2rem;
  flex-wrap: wrap;
  gap: 10px;
  height: 30px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-top: 4rem;
    height: 60px;
  }
`;

const TagItem = styled.div`
  border-radius: 30px;
  background: #f4ece1;
  padding: 7px 8px;
  display: inline-flex;
  align-items: center;

  img {
    width: 9px;
    height: 9px;
    margin-right: 5px;
    cursor: pointer;
  }

  span {
    color: #565656;
    font-family: 'Noto Sans KR';
    font-size: 10px;
    font-weight: 400;
    line-height: 0px;
    cursor: pointer;
  }
`;
