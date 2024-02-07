import styled from 'styled-components';
import { ReviewWrite, Mobiletop, EventDetail, ScrollToTop } from '../components';
import { SharePopup } from '../components/DetailPopup/SharePopup';
import { DetailPopup } from '../components/DetailPopup/DetailPopup';
import { SlideBox, StoreIndex, Productlist, Eventlist, Reviewlist } from '../components/StoreDetail';
import { useRecoilValue } from 'recoil';
import { reviewmodalState, shareModalState, detailModalState, eventDetailModal } from '../recoil';

export default function StoreDetail() {
  const sharemodal = useRecoilValue(shareModalState);
  const detailmodal = useRecoilValue(detailModalState);
  const reviewmodal = useRecoilValue(reviewmodalState);
  const eventmodal = useRecoilValue(eventDetailModal);
  document.body.style.overflow = sharemodal ? 'hidden' : 'unset';
  document.body.style.overflow = detailmodal ? 'hidden' : 'unset';
  document.body.style.overflow = reviewmodal ? 'hidden' : 'unset';
  document.body.style.overflow = eventmodal ? 'hidden' : 'unset';
  return (
    <DetailBox>
      <ScrollToTop />
      <Mobiletop pagename="상세 페이지" />
      <SlideBox />
      <StoreIndex />
      <Productlist />
      <Eventlist />
      <Reviewlist />
      {sharemodal == true ? <SharePopup /> : null}
      {detailmodal == true ? <DetailPopup /> : null}
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
