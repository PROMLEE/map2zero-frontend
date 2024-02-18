import { authAPI} from '../customApi'

 const ReviewsGetApi =  async()=> {
  try {
    const response = await  authAPI.get(`/my-page/reviews`,{ params: { size : 8 } })
    return response.data;
  } catch (e) {
    console.log(e);
    alert('연동 에러');
};}


const ReviewsDeleteApi=  async(data :any)=> {

  try {
    const response = await authAPI.delete('/reviews',  { data: data });
    console.log(response)
    return response.data;
  } catch (e) {
    console.log(e);
    alert('연동 에러');
}
}

export {ReviewsGetApi, ReviewsDeleteApi } ;