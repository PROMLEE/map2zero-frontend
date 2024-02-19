import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigationbar } from './components';
import {
  Home,
  Search,
  Login,
  Mypage,
  KakaoLoginHandeler,
  NaverLoginHandeler,
  Setting,
  Owner,
  StoreDetail,
  NickName,
  SellingProduct,
  OwnerMypage,
  Map,
  SellingProductManage,
  EventManage,
  MyReview,
  Err,
  MyBookmark,
} from './pages';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { useRecoilValue } from 'recoil';
import { UserInfoState } from './recoil';

export default function App() {
  const user = useRecoilValue(UserInfoState);
  return (
    <Background>
      <BrowserRouter>
        <GlobalStyle />
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/auth/callback/kakao" element={<KakaoLoginHandeler />} />
          <Route path="/login/auth/callback/naver" element={<NaverLoginHandeler />} />
          <Route path="/store/:storeid" element={<StoreDetail />} />
          <Route path="/map" element={<Map />} />
          <Route path="/sellingproduct/:storeid" element={<SellingProduct />} />
          <Route path="/map" element={<Map />} />
          <Route path="/*" element={<Err />} />
          {user.islogin && (
            <>
              <Route path="/mypage" element={<Mypage />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/owner" element={<Owner />} />
              <Route path="/nickname" element={<NickName />} />
              <Route path="/sellingproductmanage/:storeid" element={<SellingProductManage />} />
              <Route path="/eventmanage/:storeid" element={<EventManage />} />
              <Route path="/owner/mypage" element={<OwnerMypage />} />
              <Route path="/mypage/review" element={<MyReview />} />
              <Route path="/bookmarkdetail" element={<MyBookmark />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </Background>
  );
}
const Background = styled.div`
  height: 100vh;
`;
