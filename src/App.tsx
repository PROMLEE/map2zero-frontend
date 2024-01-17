import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Search, Login, Mypage, Owner } from './pages';
import { Navigationbar } from './components';
import GlobalStyle from './GlobalStyle';
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/owner" element={<Owner />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
