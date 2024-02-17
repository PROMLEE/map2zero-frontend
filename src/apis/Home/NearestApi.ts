import { authAPI} from '../customApi'

 const NearestApi =  async(latitude: number ,longitude: number)=> {
  if(latitude!==0 &&longitude!==0 ){
    try {
      const response = await  authAPI.get(`stores/map/nearest`,{ params:{
        y: String(latitude),
        x :String(longitude),
      }})
  
      return response.data;
    } catch (e) {
      console.log(e);
      alert('연동 에러');
  }
  }
 ;}

export default NearestApi; 