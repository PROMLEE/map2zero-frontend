import axios from 'axios';

const sessionApi = async () => {
  try {
    const response = await axios.get('https://dev.map2zero.com/session', {
      params: {
        email: 'abcd@kakao.com',
      },
    });
    return response;
  } catch (e) {
    console.log(e);
    alert('연동 에러');
  }
};


export default sessionApi;