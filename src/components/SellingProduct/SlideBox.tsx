import styled from 'styled-components';
import { Product, SlidePic, ProductManage } from '.';
import { productManage } from '../../recoil';
import { useRecoilValue } from 'recoil';
import { ProductTags } from '../../recoil/Products/Products';

export const Item = () => {
  const isOwner = useRecoilValue(productManage);
  const tags = useRecoilValue(ProductTags).list;
  return (
    <SlidePic>
      {tags.map((item, index) => (
        <div key={index}>
          <List>
            {/* {productlist.map((item, index) => {
              return isOwner ? <ProductManage {...item} key={index} /> : <Product {...item} key={index} />;
            })} */}
          </List>
        </div>
      ))}
    </SlidePic>
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
