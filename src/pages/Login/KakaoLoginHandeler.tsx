import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { UserInfoState } from '../../recoil';
import { useNavigate } from 'react-router-dom';
import { Login } from '../../apis/Login/Login';
import { useCookies } from 'react-cookie';

const KakaoLoginHandeler = () => {
  const userInfo = useSetRecoilState(UserInfoState);
  const navigate = useNavigate();
  const [cookies, , removeCookie] = useCookies(['state', 'token']);
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code') || '';
    Login(cookies.state, code, cookies.token)
      .then((res: any) => {
        localStorage.setItem('accessToken', res.headers['authorization']);
        const data = res.data.data;
        data['islogin'] = true;
        data['is_manager'] = false;
        userInfo(data);
        if (data.is_new_user) {
          navigate('/nickname');
        } else {
          navigate(`/`);
        }
      })
      .catch((e) => {
        console.log(e);
        navigate(`/login`);
      })
      .then(() => {
        removeCookie('state');
        removeCookie('token');
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
