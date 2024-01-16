import React from 'react';
import styled from 'styled-components';

export const PopularSearchList = () => {
  const DUMMYDATA = [
    '검색어1',
    '검색어2검색어2검색어2검색어2검색어2검색어2검색어2검색어2검색어2',
    '검색어3',
    '검색어4',
    '검색어5',
    '검색어6',
    '검색어7검색어7검색어7검색어7검색어7검색어7검색어7검색어7',
    '검색어8',
    '검색어9',
    '검색어10',
  ];

  return (
    <ListWrap>
      <h1>인기 검색어</h1>
      <List>
        <div>
          {DUMMYDATA.slice(0, 5).map((item, index) => {
            return (
              <Data key={index}>
                <Num>{index + 1}</Num>
                <Text>{item}</Text>
              </Data>
            );
          })}
        </div>
        <div>
          {DUMMYDATA.slice(5, 10).map((item, index) => {
            return (
              <Data key={index + 5}>
                <Num>{index + 6}</Num>
                <Text>{item}</Text>
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
    font-size: 14px;
    font-weight: 510;
  }
`;

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 21px;
`;

const Data = styled.div`
  display: flex;
  margin-bottom: 3px;
`;

const Num = styled.div`
  margin-right: 13px;
  width: 25px;
  text-align: center;

  color: #0b5c71;
  font-size: 14px;
  font-weight: 400;
`;

const Text = styled.div`
  max-width: 277px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #565656;
  font-size: 14px;
  font-weight: 400;

  @media (max-width: 768px) {
    max-width: 113px;
  }
`;
