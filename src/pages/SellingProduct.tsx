import styled from 'styled-components';
import { Mobiletop, ScrollToTop } from '../components';
import NoSearchFile from '../components/SearchFile/NoSearchFile';
import { SearchBar, DefaultList } from '../components/SellingProduct';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { productManage } from '../recoil';

export const SellingProduct = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResultView, setSearchResultView] = useState(false);
  const isOwner = useSetRecoilState(productManage);

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

  useEffect(() => {
    isOwner(false);
  }, []);
  return (
    <ProductBox>
      <ScrollToTop />
      <Mobiletop pagename="판매중인 제품" />
      <Title>판매중인 제품</Title>
      <SearchBar searchText={searchText} onInputSearchHandler={onInputSearchHandler} searchHandler={searchHandler} />
      {searchResultView ? <NoSearchFile /> : <DefaultList />}
    </ProductBox>
  );
};
const ProductBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto 800rem auto;
  width: 92.4rem;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const Title = styled.div`
  width: 92.4rem;
  margin-top: 6.4rem;
  font-family: 'Noto Sans KR';
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media (max-width: 768px) {
    display: none;
  }
`;
