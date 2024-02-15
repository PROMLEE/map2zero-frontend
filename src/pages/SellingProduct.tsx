import styled from 'styled-components';
import { Mobiletop, ScrollToTop } from '../components';
import NoSearchFile from '../components/SearchFile/NoSearchFile';
import { SearchBar, DefaultList } from '../components/SellingProduct';
import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { productManage } from '../recoil';
import { SearchState } from '../recoil/Products/Products';

export const SellingProduct = () => {
  const [searchVal, setsearchVal] = useRecoilState(SearchState);
  const isOwner = useSetRecoilState(productManage);
  const [text, settext] = useState<string>('');

  const onInputSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target.value;
    settext(target);
  };

  //검색했을 때 이벤트
  const searchHandler = () => {
    setsearchVal({ ...searchVal, text: text });
  };

  useEffect(() => {
    isOwner(false);
  }, []);
  return (
    <ProductBox>
      <ScrollToTop />
      <Mobiletop pagename="판매중인 제품" />
      <Title>판매중인 제품</Title>
      <SearchBar searchText={text} onInputSearchHandler={onInputSearchHandler} searchHandler={searchHandler} />
      {searchVal.noresult ? <NoSearchFile /> : <DefaultList />}
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
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media (max-width: 768px) {
    display: none;
  }
`;
