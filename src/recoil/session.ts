import { selector } from 'recoil';
import sessionApi from '../apis/SessionApi';


const session = selector<any>({
  key: 'Session',
  get: async () => {
    const data = await sessionApi();
    localStorage.setItem('accessToken', data?.headers['authorization']);
    const accessToken = data?.headers['authorization'];
    console.log(accessToken)
  },
});

export { session };