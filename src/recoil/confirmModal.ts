import { atom } from "recoil";

export const popUpModalState = atom<boolean>({
  key: "popUpModal",
  default: false,
});


