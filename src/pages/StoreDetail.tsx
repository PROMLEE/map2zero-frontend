import styled from 'styled-components';
import { ReviewWrite } from '../components';
import { useRecoilState } from 'recoil';
import { reviewmodalState } from '../recoil';

export default function StoreDetail() {
  let [modal, setModal] = useRecoilState(reviewmodalState);
  return (
    <>
      <ReviewWriteButton onClick={() => setModal(true)}>dkdkdkkd</ReviewWriteButton>
      {modal == true ? <ReviewWrite /> : null}
    </>
  );
}
const ReviewWriteButton = styled.div`
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;
