import styled from 'styled-components';

export default function Loginbutton() {
  const client_id_kakao = process.env.REACT_APP_REST_API_KEY_Kakao;
  const redirect_uri_kakao = process.env.REACT_APP_REDIRECT_URL_Kakao;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${client_id_kakao}&redirect_uri=${redirect_uri_kakao}&response_type=code`;
  const loginKaKao = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  const client_id_naver = process.env.REACT_APP_NAVER_CLIENT_ID;
  const redirect_uri_naver = process.env.REACT_APP_NAVER_REDIRECT_URI;
  const state = process.env.REACT_APP_NAVER_STATE;
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${client_id_naver}&state=${state}&redirect_uri=${redirect_uri_naver}`;
  const loginNaver = () => {
    window.location.href = NAVER_AUTH_URL;
  };
  return (
    <SNS>
      <KakaoLink onClick={loginKaKao}>
        <img src={`assets/kakao_login_medium_wide.png`} />
      </KakaoLink>
      <NaverLink onClick={loginNaver}>
        <img src={`assets/btnG_완성형.png`} />
      </NaverLink>
    </SNS>
  );
}
const SNS = styled.div``;
const KakaoLink = styled.a``;
const NaverLink = styled.a``;
