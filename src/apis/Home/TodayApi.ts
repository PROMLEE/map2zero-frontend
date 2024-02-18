import { baseAPI} from '../customApi'

 const TodayApi =  async()=> {
  try {
    const response = await baseAPI.get(`/products/today`)
    return response.data;
  } catch (e) {
    console.log(e);
    alert('연동 에러');
};}

export default  TodayApi ;