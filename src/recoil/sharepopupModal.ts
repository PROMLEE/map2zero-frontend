import { atom } from 'recoil';

const shareModalState = atom({
  key: 'shareModal',
  default: false,
});

export { shareModalState };