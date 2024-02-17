import { selector, selectorFamily} from "recoil";
import {BookMarksApi, CurationsApi, MyApi,NearestApi,TodayApi,TrendApi} from '../../apis/Home'
import { Session } from "../session";


const MyState= selector({
    key: "MyState",
    get : async () => {
      const data = await MyApi();
      return data; 
    }
   
  });



const TodayState= selector({
  key: "TodayState",
  get : async () => {
    const data = await TodayApi();
    return data; 
  }
 
});




const TrendState= selector<any>({
  key: "TrendState",
  get : async () => {
    const data = await TrendApi();
    return data; 
  }
 
});


const NearestState=selectorFamily<any, { latitude: number; longitude: number }|null>({
  key: "NearestState",
  get: (myLocation) => async ({get}) => {
    if (!myLocation) {
      return null; 
    }
    const response = await NearestApi(myLocation.latitude, myLocation.longitude);
    return response; // API 호출 결과 반환
  },
 
});
const  CurationsState = selector<any>({
  key: " CurationsState ",
  get : async () => {
    const data = await CurationsApi();
    return data; 
  }
 
});

const  BookMarksState = selector<any>({
  key: " BookMarksState",
  get : async ({get}) => {
    const session = get(Session);
    const data = await  BookMarksApi();
    return data; 
  }
 
});




  
export { MyState, TodayState, TrendState, NearestState, CurationsState , BookMarksState  };
