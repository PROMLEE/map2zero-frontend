import { selector } from "recoil";
import sessionApi from "../apis/sessionApi";

const session= selector< any>({
  key: "Session",
  get : async () => {
    const data = await sessionApi();
    localStorage.setItem('accessToken', data?.headers['authorization'])
    const accessToken = data?.headers['authorization'];
  }

});


export { session};