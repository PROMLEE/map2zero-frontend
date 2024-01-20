import styled from 'styled-components';
import {} from '../../recoil';
import { SearchDummy } from './SearchDummy';

const SearchResultList = () => {

    return (
      <SearchResult>
      {SearchDummy.map((i) => (
        <Container key={i.storeName}>
          <SearchText>{i.storeName}</SearchText>
          <ProductText>{i.storeProduct}</ProductText>
          <AddressFrame>
            <AddressText>{i.address}</AddressText>
            <NumReview>
              <p style={{textAlign: 'right', color: '#E0E0E0', fontSize: 10, fontFamily: 'Noto Sans', fontWeight: '400', wordWrap: 'break-word'}}>(42)</p>
            </NumReview>
          </AddressFrame>
          <StoreFrame>
            <StoreImg src={`${process.env.PUBLIC_URL}assets/Search/${i.photo}`} alt={`${i.storeName}의 이미지`} />
          </StoreFrame>
          <BookMarkFrame>
          <BookMarkIcon src={`${process.env.PUBLIC_URL}/assets/Search/bookmark.png`} alt="북마크아이콘" />
          </BookMarkFrame>
        </Container>
      ))}
      </SearchResult>
    );
};

const Container = styled.div`
  width: 924px;
  height: 162px;
  position: relative;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  border: 1px #F2F2F2 solid;
  margin-bottom: 24px;
`;

const SearchResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 331px;
  
`;

const SearchText = styled.div`
  left: 178px;
  top: 13px;
  position: absolute;
  color: #0B5C71;
  font-size: 16px;
  font-family: 'Noto Sans';
  font-weight: 500;
  word-wrap: break-word;
`;

const ProductText = styled.div`
  left: 178px;
  top: 43px;
  position: absolute;
  color: #565656;
  font-size: 12px;
  font-family: 'Noto Sans';
  font-weight: 400;
  word-wrap: break-word;
`;

const AddressFrame = styled.div`
  left: 178px;
  top: 106px;
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  display: inline-flex;
`;

const AddressText = styled.div`
  color: #565656;
  font-size: 10px;
  font-family: 'Noto Sans';
  font-weight: 400;
  word-wrap: break-word;
`;

const NumReview = styled.div`
  height: 20px;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
`;

const StoreFrame = styled.div`
  width: 162px;
  height: 162px;
  left: 0;
  top: 0;
  position: absolute;
  background: white;
`;

const StoreImg = styled.img`
  width: 162px;
  height: 162px;
  left: 0;
  top: 0;
  position: absolute;
  background: #D9D9D9;
`;


const BookMarkFrame = styled.div`
  padding: 16px;
  left: 880px;
  top: 0;
  position: absolute;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;
  display: inline-flex;
`;

const BookMarkIcon = styled.img`
  width: 11.72px;
  height: 15px;
  position: relative;
`;



export default SearchResultList;