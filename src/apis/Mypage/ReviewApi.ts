import { authAPI} from '../customApi'

 const ReviewApi =  async()=> {
  try {
    const response = await  authAPI.get(`/my-page/reviews`,{ params: { size : 8 } })
    return response.data;
  } catch (e) {
    console.log(e);
    alert('연동 에러');
};}

export default ReviewApi ;