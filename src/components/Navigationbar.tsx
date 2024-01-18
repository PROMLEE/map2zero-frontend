import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
  return (
    <>
      {/* 모바일 네비게이션 바 (하단) */}
      <NavMobile>
        <Link to="/mypage">
          <LinksliMobile src={`${process.env.PUBLIC_URL}/assets/Navbar/map_mobile.png`} />
        </Link>
        <Link to="/">
          <LinksliMobile src={`${process.env.PUBLIC_URL}/assets/Navbar/home_mobile.png`} />
        </Link>
        <Link to="/search">
          <LinksliMobile src={`${process.env.PUBLIC_URL}/assets/Navbar/search_mobile.png`} />
        </Link>
        <Link to="/login">
          <LinksliMobile src={`${process.env.PUBLIC_URL}/assets/Navbar/user_mobile.png`} />
        </Link>
      </NavMobile>
      {/* PC 네비게이션 바 (상단) */}
      <Box />
      <Navimg
        src={`${process.env.PUBLIC_URL}/assets/Navbar/logo.png`}
        $top="1rem"
        $left="2.4rem"
        $right="auto"
        $width="7.6904rem"
        $height="6rem"
      />
      <Link to="/search">
        <Navimg
          src={`${process.env.PUBLIC_URL}/assets/Navbar/searchimg.png`}
          $top="2.7rem"
          $left="auto"
          $right="8rem"
          $width="3rem"
          $height="3rem"
        />
      </Link>
      <Link to="/login">
        <Navimg
          src={`${process.env.PUBLIC_URL}/assets/Navbar/userimg.png`}
          $top="2.2rem"
          $left="auto"
          $right="2.4rem"
          $width="4rem"
          $height="4rem"
        />
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
  bottom: 0rem;
  width: 100%;
  height: 12.25rem;
  background-color: #fcfcfc;
  box-shadow: 0rem 0rem 0.4rem 0rem rgba(0, 0, 0, 0.25);
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
  box-shadow: 0rem 0rem 0.4rem 0rem rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 8rem;
  top: 0rem;
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
  height: 8rem;
  top: 0rem;
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
  font-size: 2rem;
  font-style: normal;
  font-weight: 510;
  float: left;
  padding: 1rem;
  margin-left: 3rem;
`;
const LinksliMobile = styled.img`
  height: 12.25rem;
`;
