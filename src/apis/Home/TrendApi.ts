import { baseAPI} from '../customApi'

 const TrendApi =  async()=> {
  try {
    const response = await  baseAPI.get(`/stores/trend`)
    return response.data;
  } catch (e) {
    console.log(e);
    alert('연동 에러');
};}

export default  TrendApi ;