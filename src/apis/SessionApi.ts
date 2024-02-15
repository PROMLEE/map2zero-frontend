import axios from 'axios';

const SessionApi = async () => {
  try {
    const response = await axios.get('https://dev.map2zero.com/session', {
      params: {
        email: 'test@kakao.com',
      },
    });
    return response;
  } catch (e) {
    console.log(e);
    alert('연동 에러');
  }
};


export default SessionApi;
