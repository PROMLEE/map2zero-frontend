import styled from 'styled-components';
import { BookMarkList, ReviewList, PersonalInfo, StoreOwner } from '../components/Mypage';
export default function Mypage() {
  return (
    <>
      <ContentWrap>
        <PersonalInfo />
        <hr />
        <BookMarkList />
        <hr />
        <ReviewList />
        <hr />
        <StoreOwner />
      </ContentWrap>
    </>
  );
}

const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  & > hr {
    width: 80%;
    border: none;
    height: 0.5px;
    background-color: #d9d9d9;
  }
`;
