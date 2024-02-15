import { baseAPI, authAPI } from '../customApi';

const Handler = async (provider: string) => {
  try {
    const response = await baseAPI.get(`/oauth2/state/${provider}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const Login = async (state: string, code: string) => {
  try {
    const response = await authAPI.get(`/oauth2/code`, { params: { state: state, code: code } });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export { Handler, Login };
