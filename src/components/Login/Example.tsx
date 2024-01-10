import styled from 'styled-components';

export default function KakaoLogin() {
  const CLIENT_ID = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URL;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  return (
    <SNSLink href={KAKAO_AUTH_URL}>
      <img src={`assets/kakao_login_medium_wide.png`} />
    </SNSLink>
  );
}
const SNSLink = styled.a``;
