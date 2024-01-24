import styled from 'styled-components';
import { ReviewWrite, Mobiletop } from '../components';
import { SlideBox, StoreIndex, Productlist, Eventlist, Reviewlist } from '../components/StoreDetail';
import { useRecoilValue } from 'recoil';
import { reviewmodalState } from '../recoil';

export const SellingProduct = () => {
  const modal = useRecoilValue(reviewmodalState);
  document.body.style.overflow = modal ? 'hidden' : 'unset';
  return (
    <ProductBox>
      <Mobiletop pagename="판매중인 제품" />
    </ProductBox>
  );
};
const ProductBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
