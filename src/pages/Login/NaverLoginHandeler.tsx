import { useEffect } from 'react';
import axios from 'axios';

const KakaoLoginHandeler = () => {
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    const state = new URL(window.location.href).searchParams.get('state');
    console.log(code);
    console.log(state);

    // axios.post('/api/client/login/oauth/naver', {
    //   authorizationCode: code,
    //   state: state
    // }).then((response) => {
    //   //spring에서 발급된 jwt 반환 localStorage 저장
    //   localStorage.setItem("accessToken", response.headers.accesstoken);

    //   //메인 페이지로 이동
    //   window.location.href = "/";
    // }).catch((err) => {
    //   //에러발생 시 경고처리 후 login 페이지로 전환
    //   alert(err.response.data.detail);
    //   window.location.href = "/login";
    // })
  }, []);

  return (
    <div className="LoginHandeler">
      <div className="notice">
        <p>로그인 중입니다.</p>
        <p>잠시만 기다려주세요.</p>
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default KakaoLoginHandeler;
