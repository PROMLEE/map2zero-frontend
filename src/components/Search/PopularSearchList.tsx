import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPopularSearchApi } from '../../apis/SearchApi';

export type TgetPopularSearchResponse = {
  id: number;
  name: string;
  address: {
    province: string;
    city: string;
    road_name: string;
    lot_number: string;
  };
};

export const PopularSearchList = () => {
  const [popularStore, setPopularStore] = useState<TgetPopularSearchResponse[]>();

  useEffect(() => {
    PopularSearchList();
  }, []);

  const PopularSearchList = async () => {
    const data = await getPopularSearchApi();
    setPopularStore(data.data);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const MAX_LENGTH = windowWidth <= 768 ? 8 : 10;

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
      <h1>실시간 인기 매장</h1>
      <List>
        <div>
          {popularStore &&
            popularStore.slice(0, 5).map((item) => {
              return (
                <Data key={item.id}>
                  <Num>{item.id}</Num>
                  <Text>{item.name.length > MAX_LENGTH ? item.name.slice(0, MAX_LENGTH) + '...' : item.name}</Text>
                </Data>
              );
            })}
        </div>
        <div>
          {popularStore &&
            popularStore.slice(5, 10).map((item) => {
              return (
                <Data key={item.id}>
                  <Num>{item.id}</Num>
                  <Text>{item.name.length > MAX_LENGTH ? item.name.slice(0, MAX_LENGTH) + '...' : item.name}</Text>
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
