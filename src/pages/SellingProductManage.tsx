import styled from 'styled-components';
import { Mobiletop, ScrollToTop } from '../components';
import NoSearchFile from '../components/SearchFile/NoSearchFile';
import { SearchBar, DefaultList } from '../components/SellingProduct';
import { useEffect, useState } from 'react';
import { productManage } from '../recoil';
import { useSetRecoilState } from 'recoil';
import { Cookies } from 'react-cookie';

export const SellingProductManage = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResultView, setSearchResultView] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [fadeInOut, setFadeInOut] = useState('');

  const isOwner = useSetRecoilState(productManage);

  const cookies = new Cookies();

  const setCookie = (name: string, value: string, options?: any) => {
    return cookies.set(name, value, { ...options });
  };

  const getCookie = (name: string) => {
    return cookies.get(name);
  };

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
    isOwner(true);
    if (!getCookie('sellingproductmanage_visit')) {
      setShowSideMenu(true);
      setCookie('sellingproductmanage_visit', 'true');
    }
  }, []);
  const showMenuList = () => {
    setFadeInOut('fade-in');
    setShowSideMenu(true);
  };
  const closeMenuList = () => {
    setFadeInOut('fade-out');
    setShowSideMenu(false);
  };
  return (
    <ProductBox>
      <ScrollToTop />
      <Mobiletop pagename="판매 제품 관리" />
      <Title>판매 제품 관리</Title>
      <SearchBar searchText={searchText} onInputSearchHandler={onInputSearchHandler} searchHandler={searchHandler} />
      {searchResultView ? <NoSearchFile /> : <DefaultList />}
      <ButtonBox>
        {showSideMenu ? <ArrowBubble className={'side-menu ' + fadeInOut}>제품추가</ArrowBubble> : null}
        <Button onMouseOver={showMenuList} onMouseLeave={closeMenuList} />
      </ButtonBox>
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
  .fade-in {
    opacity: 1;
    animation: fadeIn ease-in-out 1s;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
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
const ButtonBox = styled.div`
  position: fixed;
  bottom: 6rem;
  width: 92.4rem;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 90%;
    bottom: 20rem;
  }
`;
const ArrowBubble = styled.div`
  padding-top: 1rem;
  color: #0b5c71;
  font-size: 1rem;
  text-align: center;
  margin-left: auto;
  margin-right: 0.5rem;
  width: 6.4rem;
  height: 3.8rem;
  background-image: url('/assets/ProductList/balloon.svg');
  bottom: 4rem;
  right: 4rem;
  @media (max-width: 768px) {
    padding-top: 2rem;
    font-size: 2.5rem;
    width: 16rem;
    height: 10rem;
    bottom: 40px;
    right: 40px;
  }
`;

const Button = styled.div`
  background-image: url('/assets/ProductList/plusbutton.svg');
  width: 6.4rem;
  height: 6.4rem;
  margin: 1rem 0.5rem 0 auto;
  @media (max-width: 768px) {
    font-size: 2.5rem;
    width: 16rem;
    height: 16rem;
  }
`;
