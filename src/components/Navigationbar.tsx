import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Map_mobile } from '../assets/Navbar/map_mobile.svg';
import { ReactComponent as Home_mobile } from '../assets/Navbar/home_mobile.svg';
import { ReactComponent as Search_mobile } from '../assets/Navbar/search_mobile.svg';
import { ReactComponent as User_mobile } from '../assets/Navbar/user_mobile.svg';
import { useRecoilState } from 'recoil';
import { UserInfoState } from '../recoil';
import { useEffect, useState } from 'react';
import { authAPI } from '../apis/customApi';

export const Navigationbar = () => {
  const [userinfo, setuserinfo] = useRecoilState(UserInfoState);
  const accessToken = localStorage.getItem('accessToken');
  const [data, setData] = useState(accessToken);
  useEffect(() => {
    setData(accessToken);
  }, [accessToken]);

  useEffect(() => {
    getProfileImg();
  }, []);
  const getProfileImg = async () => {
    if (data) {
      try {
        const res: any = await authAPI.get(`/my-page`);
        const newinfo = {
          ...userinfo,
          photo: { url: res.data.data.photo.url },
          islogin: true,
          is_manager: res.data.data.is_manager,
        };
        setuserinfo(newinfo);
      } catch (err: any) {
        if (err.response.status === 401) {
          localStorage.removeItem('accessToken');
          const newinfo = { ...userinfo, photo: { url: '' }, islogin: false, is_manager: false };
          setuserinfo(newinfo);
          setData(null);
        }
      }
    }
  };

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
        {data ? (
          <NavLinkStyle to="/mypage">
            <User_mobile />
          </NavLinkStyle>
        ) : (
          <NavLinkStyle to="/login">
            <User_mobile />
          </NavLinkStyle>
        )}
      </NavMobile>
      {/* PC 네비게이션 바 (상단) */}
      <Box />
      <Logoimg src={`${process.env.PUBLIC_URL}/assets/Navbar/logo.png`} />
      <RightBox>
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
        {data !== null ? (
          <Link to="/mypage">
            <Navimg
              src={
                userinfo.photo.url !== '' ? userinfo.photo.url : `${process.env.PUBLIC_URL}/assets/Navbar/userimg.svg`
              }
              $top="1.5rem"
              $left="auto"
              $right="2.4rem"
              $width="4rem"
              $height="4rem"
            />
          </Link>
        ) : (
          <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
            <BeforeLogin>로그인 / 회원가입</BeforeLogin>
          </Link>
        )}
      </RightBox>
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
  z-index: 3;
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

const RightBox = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  top: 2.5rem;
  left: auto;
  right: 2.4rem;
  width: 12rem;
  height: 4rem;
  z-index: 2;
`;
const Logoimg = styled.img`
  position: fixed;
  display: block;
  top: 1rem;
  left: 2.4rem;
  right: auto;
  width: 7.6904rem;
  height: 6rem;
  z-index: 2;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Navimg = styled.img<{
  $top: string;
  $left: string;
  $right: string;
  $width: string;
  $height: string;
}>`
  top: ${($props) => $props.$top};
  left: ${($props) => $props.$left};
  right: ${($props) => $props.$right};
  width: ${($props) => $props.$width};
  height: ${($props) => $props.$height};
  border-radius: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const BeforeLogin = styled.div`
  text-decoration: none;
  font-size: 1.2rem;
  width: 10rem;
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
