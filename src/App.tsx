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
  Map,
} from './pages';

import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';

export default function App() {
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
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/owner" element={<Owner />} />
          <Route path="/store" element={<StoreDetail />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </Background>
  );
}
const Background = styled.div`
  height: 100vh;
`;
