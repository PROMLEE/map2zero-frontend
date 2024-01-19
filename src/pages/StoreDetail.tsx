import styled from 'styled-components';
import { ReviewWrite, Mobiletop } from '../components';
import { SlideBox, StoreIndex, Productlist, Eventlist, Reviewlist } from '../components/StoreDetail';
import { useRecoilValue } from 'recoil';
import { reviewmodalState } from '../recoil';

export default function StoreDetail() {
  const modal = useRecoilValue(reviewmodalState);
  return (
    <DetailBox>
      <Mobiletop pagename="상세 페이지" />
      <SlideBox />
      <StoreIndex />
      <Productlist />
      <Eventlist />
      <Reviewlist />
      {modal == true ? <ReviewWrite /> : null}
    </DetailBox>
  );
}
const DetailBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
