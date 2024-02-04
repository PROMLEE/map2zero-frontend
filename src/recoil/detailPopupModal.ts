import { atom } from 'recoil';

const detailModalState = atom({
  key: 'detailModal',
  default: false,
});

export { detailModalState };