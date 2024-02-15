import { selector } from "recoil";
import SessionApi from "../apis/SessionApi";

const Session= selector< any>({
  key: "Session",
  get : async () => {
    const data = await SessionApi();
    const accessToken = data?.headers['authorization'];
    console.log(accessToken)
  }
 
});


export { Session};
