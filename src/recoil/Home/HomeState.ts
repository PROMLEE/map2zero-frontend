import { selector, selectorFamily} from "recoil";
import {MyApi,TodayApi,TrendApi} from '../../apis/Home'
import NearestApi from "../../apis/Home/NearestApi";


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

  
export { MyState, TodayState, TrendState, NearestState };
