import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Product } from '.';
import { Products } from '../../apis/SellingProduct/Products';
import { useRecoilValue } from 'recoil';
import { SearchState } from '../../recoil/Products/Products';

const SearchResult = () => {
  const [items, setitems] = useState<any[]>([]);
  const searchVal = useRecoilValue(SearchState);
  const params = useParams();
  useEffect(() => {
    if (params.storeid) {
      Products(Number(params.storeid), null, searchVal).then((res) => {
        setitems(res);
      });
    }
  }, [searchVal, params.storeid]);
  return (
    <Wrap>
      {items.length > 0 ? (
        <>
          <h2>검색결과</h2>
          <List>
            {items.map((item, index) => {
              return <Product {...item} key={index} />;
            })}
          </List>
        </>
      ) : (
        <NoResult>
          <NoSearch src={`${process.env.PUBLIC_URL}/assets/Search/nosearchimage.jpg`} alt="검색결과 없음" />
          <NoSearchText>검색 결과 없음</NoSearchText>
        </NoResult>
      )}
    </Wrap>
  );
};

const List = styled.div`
  display: flex;
  overflow: visible;
  flex-wrap: wrap;
  width: 92.4rem;
  gap: 2.4rem;
  padding-bottom: 10rem;
  @media (max-width: 768px) {
    width: 100%;
    gap: 2%;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  h2 {
    margin-top: 2rem;
    margin-bottom: 2rem;
    @media (max-width: 768px) {
      font-size: 3rem;
      margin-top: 5rem;
      margin-bottom: 5rem;
    }
  }
`;

const NoSearch = styled.img`
  width: 120px;
  height: 120px;
  margin: 119px 900px 16px 900px;
`;

const NoSearchText = styled.p`
  color: #cccccc;
  font-size: 14px;
  font-weight: 500px;
  margin-bottom: 298px;
`;
const NoResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default SearchResult;
