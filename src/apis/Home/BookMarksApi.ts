import { authAPI} from '../customApi'

 const BookMarksApi=  async()=> {

    try {
      const response = await  authAPI.get(`my-page/bookmarks`,{ params:{
        size : 10
      }})

      return response.data;
    } catch (e) {
      console.log(e);
      alert('연동 에러');
  }
  }


export default  BookMarksApi;