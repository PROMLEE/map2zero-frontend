import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navigationbar = () => {
  return (
    <Mainheader>
      <Link to="/">
        <Logo src="assets/ecolink.png" alt="로고" />
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
};

const Mainheader = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  border-bottom: black solid 1px;
`;
const Logo = styled.img`
  width: 40px;
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
