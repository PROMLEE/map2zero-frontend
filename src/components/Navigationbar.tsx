import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Map_mobile } from '../assets/Navbar/map_mobile.svg';
import { ReactComponent as Home_mobile } from '../assets/Navbar/home_mobile.svg';
import { ReactComponent as Search_mobile } from '../assets/Navbar/search_mobile.svg';
import { ReactComponent as User_mobile } from '../assets/Navbar/user_mobile.svg';
import { useRecoilValue } from 'recoil';
import { UserInfoState } from '../recoil';
export const Navigationbar = () => {
  const userinfo = useRecoilValue(UserInfoState);
  return (
    <>
      {/* 모바일 네비게이션 바 (하단) */}
      <NavMobile>
        <NavLinkStyle to="/map">
          <Map_mobile />
        </NavLinkStyle>
        <NavLinkStyle to="/">
          <Home_mobile />
        </NavLinkStyle>
        <NavLinkStyle to="/search">
          <Search_mobile />
        </NavLinkStyle>
        {userinfo.islogin ? (
          <NavLinkStyle to="/mypage">
            <User_mobile />
          </NavLinkStyle>
        ) : (
          <NavLinkStyle to="/login">
            <User_mobile />
          </NavLinkStyle>
        )}
        <NavLinkStyle to="/login">
          <User_mobile />
        </NavLinkStyle>
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
          src={`${process.env.PUBLIC_URL}/assets/Navbar/searchimg.svg`}
          $top="3.45rem"
          $left="auto"
          $right="8.75rem"
          $width="1.5rem"
          $height="1.5rem"
        />
      </Link>
      {userinfo.islogin ? (
        <Link to="/mypage">
          <Navimg src={userinfo.photo.url} $top="2.2rem" $left="auto" $right="2.4rem" $width="4rem" $height="4rem" />
        </Link>
      ) : (
        <Link to="/login">
          <Navimg
            src={`${process.env.PUBLIC_URL}/assets/Navbar/userimg.svg`}
            $top="2.2rem"
            $left="auto"
            $right="2.4rem"
            $width="4rem"
            $height="4rem"
          />
        </Link>
      )}

      <NavPc>
        <NavLinkStyle to="/">
          <LinksliPc>홈</LinksliPc>
        </NavLinkStyle>
        <NavLinkStyle to="/map">
          <LinksliPc>매장 위치</LinksliPc>
        </NavLinkStyle>
        <NavLinkStyle to="/aboutus">
          <LinksliPc>About us</LinksliPc>
        </NavLinkStyle>
      </NavPc>
    </>
  );
};

const NavMobile = styled.div`
  display: none;
  position: fixed;
  bottom: 0rem;
  width: 100%;
  height: 12.25rem;
  background-color: #fcfcfc;
  box-shadow: 0rem 0rem 0.4rem 0rem rgba(0, 0, 0, 0.25);
  align-items: center;
  justify-content: space-around;
  z-index: 1;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
const NavPc = styled.div`
  position: fixed;
  display: flex;
  height: 100%;
  background: #fff;
  box-shadow: 0rem 0rem 0.4rem 0rem rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 8rem;
  top: 0rem;
  align-items: center;
  justify-content: center;
  z-index: 1;
  gap: 4rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Box = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 8rem;
  top: 0rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Navimg = styled.img<{ $top: string; $left: string; $right: string; $width: string; $height: string }>`
  position: fixed;
  display: block;
  top: ${($props) => $props.$top};
  left: ${($props) => $props.$left};
  right: ${($props) => $props.$right};
  width: ${($props) => $props.$width};
  height: ${($props) => $props.$height};
  z-index: 2;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const LinksliPc = styled.div`
  font-family: 'Noto Sans KR';
  height: 100%;
  font-size: 2rem;
  font-style: normal;
  float: left;
  padding: 1rem;
`;
const NavLinkStyle = styled(NavLink)`
  color: var(--dark-gray, #565656);
  font-weight: 500;
  &.active {
    color: #000;
    font-weight: 600;
    path {
      fill: #ff6464;
    }
  }
`;
