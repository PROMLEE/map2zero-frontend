import styled from 'styled-components';
import { ReviewWrite, Mobiletop } from '../components';
import { SharePopup } from '../components/DetailPopup/SharePopup';
import { DetailPopup } from '../components/DetailPopup/DetailPopup';
import { SlideBox, StoreIndex, Productlist, Eventlist, Reviewlist } from '../components/StoreDetail';
import { useRecoilValue } from 'recoil';
import { reviewmodalState, shareModalState, detailModalState } from '../recoil';

export default function StoreDetail() {
  const modal = useRecoilValue(reviewmodalState);
  const sharemodal = useRecoilValue(shareModalState);
  const detailmodal = useRecoilValue(detailModalState);
  document.body.style.overflow = modal ? 'hidden' : 'unset';
  document.body.style.overflow = sharemodal ? 'hidden' : 'unset';
  document.body.style.overflow = detailmodal ? 'hidden' : 'unset';
  return (
    <DetailBox>
      <Mobiletop pagename="상세 페이지" />
      <SlideBox />
      <StoreIndex />
      <Productlist />
      <Eventlist />
      <Reviewlist />
      {modal == true ? <ReviewWrite /> : null}
      {sharemodal == true ? <SharePopup /> : null}
      {detailmodal == true ? <DetailPopup /> : null}
    </DetailBox>
  );
}
const DetailBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
