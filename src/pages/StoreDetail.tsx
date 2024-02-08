import styled from 'styled-components';
import { ReviewWrite, Mobiletop } from '../components';
import { SharePopup } from '../components/DetailPopup/SharePopup';
import { DetailPopup } from '../components/DetailPopup/DetailPopup';
import { SlideBox, StoreIndex, Productlist, Eventlist, Reviewlist } from '../components/StoreDetail';
import { useRecoilValue } from 'recoil';
import { reviewmodalState, shareModalState, detailModalState } from '../recoil';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function StoreDetail() {
  const params = useParams();
  const modal = useRecoilValue(reviewmodalState);
  const sharemodal = useRecoilValue(shareModalState);
  const detailmodal = useRecoilValue(detailModalState);
  const [storeId, setstoreId] = useState(0);
  document.body.style.overflow = modal ? 'hidden' : 'unset';
  document.body.style.overflow = sharemodal ? 'hidden' : 'unset';
  document.body.style.overflow = detailmodal ? 'hidden' : 'unset';
  useEffect(() => {
    const paramId = params.storeid;
    if (paramId) {
      setstoreId(Number(paramId));
    }
  }, [params.storeid]);

  return (
    <DetailBox>
      {/* {storeId} */}
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
