import { atom } from 'recoil';

export const imgModalState = atom<boolean>({
  key: 'imgModal',
  default: false,
});
