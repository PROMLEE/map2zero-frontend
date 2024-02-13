import styled from 'styled-components';
import { ReviewWrite, Mobiletop, EventDetail, ScrollToTop } from '../components';
import { SharePopup } from '../components/DetailPopup/SharePopup';
import { DetailPopup } from '../components/DetailPopup/DetailPopup';
import { SlideBox, StoreIndex, Productlist, Eventlist, Reviewlist } from '../components/StoreDetail';
import { useRecoilState, useRecoilValue } from 'recoil';
import { reviewmodalState, shareModalState, detailModalState, eventDetailModal } from '../recoil';
import { StoreState } from '../recoil/StoreDetail/StoresState';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import StoreDetailApi from '../apis/StoreDetail/Stores';
import { Store } from '../recoil/StoreDetail/types';

export default function StoreDetail() {
  const params = useParams();
  const reviewmodal = useRecoilValue(reviewmodalState);
  const sharemodal = useRecoilValue(shareModalState);
  const detailmodal = useRecoilValue(detailModalState);
  const eventmodal = useRecoilValue(eventDetailModal);
  const [storeDetail, setstoreDetail] = useRecoilState<Store>(StoreState);

  document.body.style.overflow = reviewmodal || sharemodal || detailmodal || eventmodal ? 'hidden' : 'unset';
  useEffect(() => {
    if (params.storeid) getdata(params.storeid);
  }, [params.storeid]);

  const getdata = async (id: string) => {
    if (id !== '0') {
      const data = await StoreDetailApi(id);
      setstoreDetail(data.data);
    }
  };

  return (
    <DetailBox>
      <ScrollToTop />
      {/* {storeId} */}
      <Mobiletop pagename="상세 페이지" />
      <SlideBox />
      <StoreIndex />
      <Productlist />
      <Eventlist />
      <Reviewlist />
      {sharemodal == true ? <SharePopup /> : null}
      {detailmodal == true ? <DetailPopup /> : null}
      {reviewmodal == true ? <ReviewWrite id={storeDetail.id} /> : null}
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
