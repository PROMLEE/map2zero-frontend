import styled from 'styled-components';
import {} from '../../recoil';
import { SearchDummy } from './SearchDummy';

const SearchResultList = () => {

    return (
    <Wrap>
      <SearchResults>
        {SearchDummy.map((i) => (
          <SearchResultItem key={i.storeName}>
            <ContentContainer>
              <StoreImg src="assets/Frame.png" />
              <TextContainer>
              <StoreName>{i.storeName}</StoreName>
              <StoreProduct>{i.storeProduct}</StoreProduct>
              <StoreAddress>{i.address}</StoreAddress>
              </TextContainer>
            </ContentContainer>
            <BookmarkIcon src="assets/bookmark.png" alt="북마크 아이콘" />
          </SearchResultItem>
        ))}
      </SearchResults>
    </Wrap>
    );
};


const Wrap = styled.div`
  width: calc(100vw - 10%);
  margin : 10%;
  @media (max-width: 768px) {
    width: calc(100vw - 5%);
    margin-left: 5%;
  }
`;

const SearchResults = styled.div`

  display: flex;
  flex-direction: column;
  height: 30rem;
  width: 100%;
  padding: 3rem 0 3rem 1rem;
  overflow-y: auto;

  /* 인터넷 익스플로러를 위한 스타일 */
  -ms-overflow-style: none;

  /* 파이어폭스를 위한 스타일 */
  scrollbar-width: none;

  /* 웹킷(크롬, 사파리, 새로운 엣지) 브라우저를 위한 스타일 */
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 768px) {
    height: 55rem;
    padding: 5rem 0 5rem 2rem;
  }
`;


const SearchResultItem = styled.div`
  width: 723px;
  height: 162px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid var(--light-gray, #F2F2F2);
  background: #FFF;
  display: flex;
  flex-direction: column;
  position: relative;


  & > h3 {
    font-size: 1.4rem;
    margin: 1rem;
    width: 45px
    height: 22px
    top: 13px
    left: 178px

  }
  & > p {
    font-size: 1rem;
    margin: 2rem 0 0 1rem;
    color: rgba(86, 86, 86, 1);
  }
`;

const StoreImg = styled.img`
width: 162px
height: 162px

`;

const BookmarkIcon = styled.img`
  width: 1.5rem;
  height: 2rem;
  position: absolute;
  top: 0;
  right: 0;

`;

const StoreName = styled.p`
width: 45px
height: 22px
top: 13px
left: 178px
font-family: Noto Sans;
font-size: 16px;
font-weight: 500;
line-height: 22px;
letter-spacing: 0em;
text-align: left;


`;

const StoreProduct = styled.p`
width: 166px
height: 16px
top: 43px
left: 178px
font-family: Noto Sans;
font-size: 12px;
font-weight: 400;
line-height: 16px;
letter-spacing: 0em;
text-align: left;

`;

const StoreAddress = styled.p`
width: 40px
height: 14px
font-family: Noto Sans;
font-size: 10px;
font-weight: 400;
line-height: 14px;
letter-spacing: 0em;
text-align: left;

`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const TextContainer = styled.p`
  flex-direction: column;
  marginLeft: 1rem;
`;



export default SearchResultList;