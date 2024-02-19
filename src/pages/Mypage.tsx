import styled from 'styled-components';
import { BookMarkList, ReviewList, PersonalInfo, StoreOwner, MyStoreManagement } from '../components/Mypage';
import { useRecoilValue } from 'recoil';
import { InfoStateSelector, ManagerStoreSelector } from '../recoil/Mypage/myPageState';
import { managerStoreType } from '../recoil/Mypage/myPageStateType';
import { Mobiletop } from '../components';

export default function Mypage() {
  const info = useRecoilValue(InfoStateSelector);
  const managerStore: managerStoreType[] = info.is_manager ? useRecoilValue(ManagerStoreSelector) : [];

  return (
    <ContentWrap>
      <Mobiletop pagename="마이페이지" />
      <PersonalInfo />
      <Line />
      {info.is_manager && managerStore.length > 0 ? (
        <ManageBox>
          {managerStore.map((item, index) => (
            <MyStoreManagement {...item} key={index} />
          ))}
          <Line $mobileVisible />
        </ManageBox>
      ) : null}
      <BookMarkList />
      <Line $mobileVisible />
      <ReviewList />
      <Line $mobileVisible />
      <StoreOwner />
    </ContentWrap>
  );
}
type LineType = {
  $mobileVisible?: boolean;
};

const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
`;
const Line = styled.hr<LineType>`
  width: 80%;
  border: none;
  height: 0.5px;
  background-color: #d9d9d9;
  @media (max-width: 768px) {
    width: 85%;
    display: ${(props) => (props.$mobileVisible ? 'flex' : 'none')};
  }
`;

const ManageBox = styled.div`
  display: flex;
  width: 80%;
`;
