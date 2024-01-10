import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Search, Login, Mypage, Setting, Owner } from './pages';
import { Navigationbar } from './components';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/owner" element={<Owner />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
