import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
  return (
    <>
      {/* 모바일 네비게이션 바 (하단) */}
      <NavMobile>
        <Link to="/mypage">
          <LinksliMobile src={'assets/Navbar/map_mobile.png'} />
        </Link>
        <Link to="/">
          <LinksliMobile src={'assets/Navbar/home_mobile.png'} />
        </Link>
        <Link to="/search">
          <LinksliMobile src={'assets/Navbar/search_mobile.png'} />
        </Link>
        <Link to="/login">
          <LinksliMobile src={'assets/Navbar/user_mobile.png'} />
        </Link>
      </NavMobile>
      {/* PC 네비게이션 바 (상단) */}
      <Box />
      <Navimg src={'assets/Navbar/logo.png'} $top="15px" $left="24px" $right="auto" $width="139px" $height="50px" />
      <Link to="/search">
        <Navimg
          src={'assets/Navbar/searchimg.png'}
          $top="27px"
          $left="auto"
          $right="80px"
          $width="30px"
          $height="30px"
        />{' '}
      </Link>
      <Link to="/login">
        <Navimg src={'assets/Navbar/userimg.png'} $top="22px" $left="auto" $right="24px" $width="40px" $height="40px" />
      </Link>
      <NavPc>
        <Link to="/">
          <LinksliPc>홈</LinksliPc>
        </Link>
        <Link to="/mypage">
          <LinksliPc>매장 위치</LinksliPc>
        </Link>
        <Link to="/mypage">
          <LinksliPc>About us</LinksliPc>
        </Link>
      </NavPc>
    </>
  );
}

const NavMobile = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 49px;
  background-color: #fcfcfc;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 1;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const NavPc = styled.div`
  position: fixed;
  display: none;
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 80px;
  top: 0px;
  align-items: center;
  justify-content: center;
  z-index: 1;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
const Box = styled.div`
  position: relative;
  display: none;
  width: 100%;
  height: 80px;
  top: 0px;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
export const Navimg = styled.img<{ $top: string; $left: string; $right: string; $width: string; $height: string }>`
  position: fixed;
  display: none;
  top: ${($props) => $props.$top};
  left: ${($props) => $props.$left};
  right: ${($props) => $props.$right};
  width: ${($props) => $props.$width};
  height: ${($props) => $props.$height};
  z-index: 2;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;
const LinksliPc = styled.div`
  color: var(--dark-gray, #565656);
  font-family: 'SF Pro';
  font-size: 20px;
  font-style: normal;
  font-weight: 510;
  float: left;
  padding: 10px;
  margin-left: 30px;
`;
const LinksliMobile = styled.img`
  height: 49px;
`;
