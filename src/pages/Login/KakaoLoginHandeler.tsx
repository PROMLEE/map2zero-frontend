import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { UserInfoState, UserState } from '../../recoil';
import { useNavigate } from 'react-router-dom';
import { Login } from '../../apis/Login/Login';

const KakaoLoginHandeler = () => {
  const userInfo = useSetRecoilState(UserInfoState);
  const state = useRecoilValue(UserState);
  const navigate = useNavigate();
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code') || '';
    Login(state, code)
      .then((res) => {
        localStorage.setItem('accessToken', res.headers['authorization']);
        const data = res.data.data;
        data['islogin'] = true;
        userInfo(data);
        if (data.is_new_user) {
          navigate('/nickname');
        } else {
          navigate(`/`);
        }
      })
      .catch(() => {
        alert('로그인 오류!');
        window.location.href = '/login';
      });
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
