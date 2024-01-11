import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/logo.png';

export default function Header() {
  return (
    <Mainheader>
      <Link to="/">
        <Logo src={logo} alt="로고" />
      </Link>
      <Links>
        <Link to="/search">
          <Linksli>검색</Linksli>
        </Link>
        <Link to="/login">
          <Linksli>로그인</Linksli>
        </Link>
        <Link to="/mypage">
          <Linksli>마이페이지</Linksli>
        </Link>
      </Links>
    </Mainheader>
  );
}

const Mainheader = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  text-align: center;
  border-bottom: black solid 1px;
`;
const Logo = styled.img`
  width: 138.5px;
  height: 50px;
  margin-top: 10px;
  margin-left: 80px;
  margin-right: 10px;
`;
const Links = styled.ul`
  list-style: none;
  padding: 0;
`;
const Linksli = styled.li`
  float: left;
  padding-left: 25px;
`;
