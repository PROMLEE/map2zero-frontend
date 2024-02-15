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
    <LoginBox>
      <Logo src={`${process.env.PUBLIC_URL}/assets/Navbar/logo.png`} />
      <LoginText>Map to Zero Waste</LoginText>
      <LoginMiniText>
        <Line src={`${process.env.PUBLIC_URL}/assets/Login/line.svg`} />
        맵투제로 로그인하기
        <Line src={`${process.env.PUBLIC_URL}/assets/Login/line.svg`} />
      </LoginMiniText>
      <LoginImgs>
        <LoginImg onClick={loginKaKao} $background="#FEE500" $color="black">
          <img src={`${process.env.PUBLIC_URL}/assets/Login/kakao.svg`} />
          카카오톡 로그인
        </LoginImg>
        {/* <LoginImg onClick={loginNaver} $background="#03C85A" $color="white">
          <img src={`${process.env.PUBLIC_URL}/assets/Login/naver.svg`} />
          네이버 로그인
        </LoginImg> */}
      </LoginImgs>
    </LoginBox>
  );
}

const LoginBox = styled.div`
  margin-top: 23.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-top: 40rem;
    width: 100%;
  }
`;
const Logo = styled.img`
  width: 19rem;
  height: 14.8rem;
  @media screen and (max-width: 768px) {
    width: 47.5rem;
    height: 37rem;
  }
`;
const LoginText = styled.div`
  margin-top: 2.4rem;
  color: #565656;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media screen and (max-width: 768px) {
    margin-top: 6rem;
    font-size: 4rem;
  }
`;
const LoginMiniText = styled.div`
  margin-top: 4rem;
  display: flex;
  width: 92.4rem;
  align-items: center;
  gap: 0.8rem;
  color: #565656;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media screen and (max-width: 768px) {
    width: 81.75rem;
    margin-top: 18.25rem;
    font-size: 2.5rem;
    gap: 2rem;
  }
`;
const Line = styled.img`
  width: 41.1rem;
  @media screen and (max-width: 768px) {
    width: 28.125rem;
  }
`;
const LoginImgs = styled.div`
  margin-top: 3.2rem;
  display: flex;
  width: 34.8rem;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  margin-bottom: 10rem;
  @media screen and (max-width: 768px) {
    margin-top: 8rem;
    width: 100%;
    gap: 4rem;
    margin-bottom: 25rem;
  }
`;

const LoginImg = styled.div<{ $background: string; $color: string }>`
  display: flex;
  width: 34.8rem;
  height: 6rem;
  padding: 1rem 6rem;
  justify-content: center;
  align-items: center;
  gap: 2.2rem;
  border-radius: 0.8rem;
  background: ${(props) => props.$background};
  color: ${(props) => props.$color};
  font-family: 'Noto Sans KR';
  font-size: 1.4rem;
  font-weight: 600;
  line-height: normal;
  &:hover {
    cursor: pointer;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), ${(props) => props.$background};
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    &:active {
      box-shadow:
        0px 0px 10px 0px rgba(0, 0, 0, 0.25) inset,
        0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    }
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    height: 15rem;
    padding: 2.5rem 15rem;
    font-size: 3.5rem;
    gap: 5.5rem;
    border-radius: 2rem;
  }
`;
