import styled from 'styled-components';
import { ReviewWrite, Mobiletop, EventDetail } from '../components';
import { SlideBox, StoreIndex, Productlist, Eventlist, Reviewlist } from '../components/StoreDetail';
import { useRecoilValue } from 'recoil';
import { reviewmodalState, eventDetailModal } from '../recoil';

export default function StoreDetail() {
  const reviewmodal = useRecoilValue(reviewmodalState);
  const eventmodal = useRecoilValue(eventDetailModal);
  document.body.style.overflow = reviewmodal ? 'hidden' : 'unset';
  document.body.style.overflow = eventmodal ? 'hidden' : 'unset';
  return (
    <DetailBox>
      <Mobiletop pagename="상세 페이지" />
      <SlideBox />
      <StoreIndex />
      <Productlist />
      <Eventlist />
      <Reviewlist />
      {reviewmodal == true ? <ReviewWrite /> : null}
      {eventmodal == true ? <EventDetail /> : null}
    </DetailBox>
  );
}
const DetailBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
