import styled from 'styled-components';
import { BookMarkList, ReviewList, PersonalInfo } from '../components/Mypage';
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
      </ContentWrap>
    </>
  );
}

const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-width: 1000px;
  & > hr {
    width: 72.25rem;
    border: none;
    height: 0.5px;
    background-color: #d9d9d9;
  }
`;
