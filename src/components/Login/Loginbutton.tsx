import styled from 'styled-components';

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
    <>
      <LoginBox>
        <Logo src={`${process.env.PUBLIC_URL}/assets/Login/login_logo.png`} />
        <LoginText src={`${process.env.PUBLIC_URL}/assets/Login/login_text.png`} />
        <a onClick={loginKaKao}>
          <LoginImg src={`${process.env.PUBLIC_URL}/assets/Login/kakao_login_button.png`} />
        </a>
        <a onClick={loginNaver}>
          <LoginImg src={`${process.env.PUBLIC_URL}/assets/Login/naver_login_button.png`} />
        </a>
      </LoginBox>
    </>
  );
}

const LoginBox = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    border-radius: 2.4rem;
  }
`;
const Logo = styled.img`
  width: 69.25rem;
  height: 48.5rem;
  margin-top: 40rem;
  margin-bottom: 18.75rem;
  @media screen and (min-width: 768px) {
    width: 27.7rem;
    height: 19.4rem;
    margin-top: 25.4rem;
    margin-bottom: 2.2rem;
  }
`;
const LoginText = styled.img`
  margin-bottom: 8rem;
  @media screen and (min-width: 768px) {
    margin-bottom: 3.2rem;
    height: 1.2rem;
  }
`;
const LoginImg = styled.img`
  width: 81.75rem;
  height: 15rem;
  margin-bottom: 4rem;
  border-radius: 2rem;
  @media screen and (min-width: 768px) {
    &:hover {
      cursor: pointer;
      box-shadow: 0rem 0rem 0.4rem 0rem rgba(0, 0, 0, 0.25);
    }
    height: 6rem;
    width: 34.8rem;
    border-radius: 0.8rem;
    margin-bottom: 1.6rem;
  }
`;
