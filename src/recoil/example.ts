import { atom } from "recoil";
import { exampleType } from "./types";

const exampleState = atom<exampleType>({
  key: "textState",
  default: { text: "용", nums: 0 },
});

export { exampleState };
