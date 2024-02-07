import { atom } from 'recoil';

export const productManage = atom<boolean>({
  key: 'productManage',
  default: false,
});
