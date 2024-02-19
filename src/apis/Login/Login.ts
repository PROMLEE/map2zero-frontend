import { baseAPI, authAPI } from '../customApi';

const Handler = async (provider: string) => {
  try {
    const response = await baseAPI.get(`/oauth2/state/${provider}`);
    return response;
  } catch (e) {
    console.log(e);
    alert('연동 에러');
  }
};

const Login = async (state: string, code: string, token: string) => {
  try {
    const response = await authAPI.get(`/oauth2/code`, {
      params: { state: state, code: code },
      headers: { Authorization: token },
    });
    return response;
  } catch (e) {
    console.log(e);
    alert('로그인 에러');
  }
};

export { Handler, Login };
