import { atom } from 'recoil';

export const searchToggleState = atom<number>({
  key: 'activeToggle',
  default: 0,
});
export const sellingProductSearchToggle = atom<boolean>({
  key: 'sellingProductSearchToggle',
  default: false,
});
