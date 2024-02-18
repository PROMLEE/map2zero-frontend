import { authAPI } from '../customApi';

const Like: any = async (data: any) => {
  try {
    const response = await authAPI.post(`/likes`, data);
    return response.data;
  } catch (e) {
    console.log(e);
    alert('연동 에러');
  }
};
const LikeDel: any = async (data: any) => {
  try {
    const response = await authAPI.delete(`/likes`, { data: data });
    return response.data;
  } catch (e) {
    console.log(e);
    alert('연동 에러');
  }
};
export { Like, LikeDel };
