import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { searchToggleState } from '../../recoil/searchToggleState';

export const PopularSearchList = () => {
  const activeToggle = useRecoilValue(searchToggleState);
  const STOREDUMMYDATA = [
    '인기매장순위1위',
    '인기매장순위2위',
    '인기매장순위3위',
    '인기매장순위4위',
    '인기매장순위5위',
    '인기매장순위6위',
    '인기매장순위7위',
    '인기매장순위8위',
    '인기매장순위9위',
    '인기매장순위10위글자수',
  ];

  const PRODUCTDUMMYDATA = [
    '인기제품순위1위',
    '인기제품순위2위',
    '인기제품순위3위',
    '인기제품순위4위',
    '인기제품순위5위',
    '인기제품순위6위',
    '인기제품순위7위',
    '인기제품순위8위',
    '인기제품순위9위',
    '인기제품순위10위글자수',
  ];

  const [data, setData] = useState(STOREDUMMYDATA);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const MAX_LENGTH = windowWidth <= 768 ? 8 : 10;

  useEffect(() => {
    if (activeToggle === 0) {
      setData(STOREDUMMYDATA);
    } else {
      setData(PRODUCTDUMMYDATA);
    }
  }, [activeToggle]);

  //윈도우 크기에 따른 인기 검색어 글자수 제한
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ListWrap>
      <h1>인기 {activeToggle === 0 ? '매장' : '제품'} 순위</h1>
      <List>
        <div>
          {data.slice(0, 5).map((item, index) => {
            return (
              <Data key={index}>
                <Num>{index + 1}</Num>
                <Text>{item.length > MAX_LENGTH ? item.slice(0, MAX_LENGTH) + '...' : item}</Text>
              </Data>
            );
          })}
        </div>
        <div>
          {data.slice(5, 10).map((item, index) => {
            return (
              <Data key={index + 5}>
                <Num>{index + 6}</Num>
                <Text>{item.length > MAX_LENGTH ? item.slice(0, MAX_LENGTH) + '...' : item}</Text>
              </Data>
            );
          })}
        </div>
      </List>
    </ListWrap>
  );
};

const ListWrap = styled.div`
  margin-top: 48px;

  h1 {
    color: #000;
    font-family: 'Noto Sans KR';
    font-size: 14px;
    font-weight: 500;
  }
`;

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 21px;
`;

const Data = styled.div`
  display: flex;
  margin-bottom: 8px;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: 400;
`;

const Num = styled.div`
  margin-right: 13px;
  width: 19px;
  text-align: center;

  color: #0b5c71;
`;

const Text = styled.div`
  color: #565656;
`;
