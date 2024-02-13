import { authAPI} from '../customApi'

 const MyApi =  async(latitude: number ,longitude: number)=> {
  try {
    const response = await  authAPI.get(`stores/map/nearest`,{ params:{
      x: "126.996",
      y :"37.5601"
    }})

    return response.data;
  } catch (e) {
    console.log(e);
    alert('연동 에러');
};}

export default MyApi; 