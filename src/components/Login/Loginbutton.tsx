import styled from 'styled-components';
import kakao_login_button from '../../images/Login/kakao_login_button.png';
import naver_login_button from '../../images/Login/naver_login_button.png';
import login_logo from '../../images/Login/login_logo.png';
import logintext from '../../images/Login/logintext.png';

export default function Loginbutton() {
  const client_id_kakao = process.env.REACT_APP_REST_API_KEY_Kakao;
  const redirect_uri_kakao = process.env.REACT_APP_REDIRECT_URL_Kakao;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${client_id_kakao}&redirect_uri=${redirect_uri_kakao}&response_type=code`;
  const loginKaKao = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  const client_id_naver = process.env.REACT_APP_REST_API_KEY_Naver;
  const redirect_uri_naver = process.env.REACT_APP_REDIRECT_URL_Naver;
  const state = process.env.REACT_APP_NAVER_STATE;
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${client_id_naver}&state=${state}&redirect_uri=${redirect_uri_naver}`;
  const loginNaver = () => {
    window.location.href = NAVER_AUTH_URL;
  };
  return (
    <LoginBox>
      <Logo src={login_logo} />
      <LoginText src={logintext} />
      <a onClick={loginKaKao}>
        <LoginImg src={kakao_login_button} />
      </a>
      <a onClick={loginNaver}>
        <LoginImg src={naver_login_button} />
      </a>
    </LoginBox>
  );
}
const LoginBox = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding-top: 120px;
    width: 920px;
    height: 536px;
    background-color: white;
    border-radius: 24px;
  }
`;
const Logo = styled.img`
  width: 277px;
  height: 113px;
  padding-top: 160px;
  margin-bottom: 156px;
  @media screen and (min-width: 768px) {
    margin-bottom: 147px;
    padding-top: 0px;
  }
`;
const LoginText = styled.img`
  margin-bottom: 32px;
`;
const LoginImg = styled.img`
  width: 327px;
  height: 60px;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    width: 348px;
  }
`;
