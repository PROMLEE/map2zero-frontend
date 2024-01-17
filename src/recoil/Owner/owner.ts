import { atom } from "recoil";
import {InputStateType} from "./ownerTypes";

const InputState = atom<InputStateType>({
  key: "InputState",
  default: { title: "",businessLicenseNum:undefined ,addresses:{
    address: '' ,
    detailAddress:'',                

  },contact:undefined,ceoName:""},
});

export { InputState };
