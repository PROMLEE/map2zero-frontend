import { useEffect } from 'react';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { UserInfoState } from '../../recoil';

const KakaoLoginHandeler = () => {
  const userInfo = useSetRecoilState(UserInfoState);
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    axios
      .get(`${process.env.REACT_APP_API_URL}oauth2/state/kakao`)
      .then((res) => {
        console.log(res);
        const accessToken = res.headers['authorization'];
        axios.defaults.headers.common['Authorization'] = `${accessToken}`;
        const state = res.data.data.state;
        axios
          .get(`${process.env.REACT_APP_API_URL}oauth2/code`, { params: { state: state, code: code } })
          .then((res) => {
            localStorage.setItem('accessToken', res.config.params.code);
            axios.defaults.headers.common['Authorization'] = `${res.config.params.code}`;
            const data = res.data.data;
            data['islogin'] = true;
            userInfo(data);
            if (data.is_new_user) {
              window.location.href = '/nickname';
            } else {
              window.location.href = '/';
            }
          })
          .catch(() => {
            alert('로그인 오류!');
            window.location.href = '/login';
          });
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
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
