import { authAPI } from '../customApi';

const GetEventDetail: any = async (id: number) => {
  try {
    const response = await authAPI.get(`/events/${id}`);
    console.log(response.data);
    return response.data;
  } catch (e) {
    // console.log(e);
    // alert('연동 에러');
  }
};

export default GetEventDetail;
