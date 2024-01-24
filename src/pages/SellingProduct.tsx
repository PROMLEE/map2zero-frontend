import styled from 'styled-components';
import { Mobiletop } from '../components';
import { SearchBar, DefaultList } from '../components/SellingProduct';
import { useState } from 'react';

export const SellingProduct = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResultView, setSearchResultView] = useState(false);
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
    <ProductBox>
      <Mobiletop pagename="판매중인 제품" />
      <Title>판매중인 제품</Title>
      <SearchBar searchText={searchText} onInputSearchHandler={onInputSearchHandler} searchHandler={searchHandler} />
      {searchResultView ? <DefaultList /> : <DefaultList />}
    </ProductBox>
  );
};
const ProductBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto 0 auto;
  width: 50%;
`;
const Title = styled.div`
  width: 100%;
  margin-top: 6.4rem;
  font-family: 'Noto Sans KR';
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
