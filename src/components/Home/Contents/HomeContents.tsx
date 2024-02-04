import React from 'react';
import styled from 'styled-components';
import { ItemDummy } from '../Dummy/ItemDummy';
import { StoreInfoDummy } from '../Dummy/StoreDummy';
import Items from './Items';
import StoreInfo from './StoreInfo';

const HomeContents = () => {
  return (
    <ContentWrap>
      <Title>요즘 뜨는 매장</Title>
      <StoreInfo info={StoreInfoDummy} />
      <Title>오늘의 제로웨이스트 상품</Title>
      <Items info={ItemDummy} />
      <Title>내가 북마크한 매장</Title>
      <StoreInfo info={StoreInfoDummy} />
      <Title>가까운 곳에 위치한 매장이에요</Title>
      <StoreInfo info={StoreInfoDummy} />
      <Title>나만의 제품을 만나 보세요</Title>
      <Items info={ItemDummy} />
    </ContentWrap>
  );
};

export default HomeContents;

const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
`;

const Title = styled.h1`
  font-size: 2rem;
  width: 80%;
  margin: 5.6rem 0 2.4rem 0;

  @media (max-width: 768px) {
    font-size: 4rem;
    width: 90%;
    margin: 16rem 0 4rem 0;
  }
`;
