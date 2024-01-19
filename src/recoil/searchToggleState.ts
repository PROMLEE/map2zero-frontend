import { atom } from 'recoil';

export const searchToggleState = atom<number>({
  key: 'activeToggle',
  default: 0,
});
