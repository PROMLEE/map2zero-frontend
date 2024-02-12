import { baseAPI } from '../customApi';

const GetTag: any = async (category: number) => {
  try {
    const response = await baseAPI.get(`/tags`, { params: { category: category } });
    return response.data;
  } catch (e) {
    // console.log(e);
    // alert('연동 에러');
  }
};

export default GetTag;
