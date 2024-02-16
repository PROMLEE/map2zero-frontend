import styled from 'styled-components';
import { SlidePic, TabContents } from '.';
import { useRecoilValue } from 'recoil';
import { ProductTags, SearchState } from '../../recoil/Products/Products';
import { SearchResult } from '.';

export const Item = () => {
  const searchVal = useRecoilValue(SearchState);
  const itemList = useRecoilValue(ProductTags).ids;
  return (
    <ProductBox>
      {searchVal !== '' ? (
        <SearchResult />
      ) : (
        <SlidePic>
          {itemList.map((item, index) => (
            <div key={index}>
              <TabContents tagid={item} />
            </div>
          ))}
        </SlidePic>
      )}
    </ProductBox>
  );
};
const ProductBox = styled.div`
  width: 92.4rem;
  flex-wrap: wrap;
  margin-bottom: 11rem;
  @media (max-width: 768px) {
    width: 100%;
    overflow: hidden;
  }
`;
