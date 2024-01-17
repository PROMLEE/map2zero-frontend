import { useState } from 'react';
import { ReviewWrite } from '../components';
import styled from 'styled-components';
export default function StoreDetail() {
  let [modal, setModal] = useState(false);
  return (
    <>
      <ReviewWriteButton onClick={() => setModal(!modal)}>dkdkdkkd</ReviewWriteButton>
      {modal == true ? <ReviewWrite /> : null}
    </>
  );
}
const ReviewWriteButton = styled.div``;
