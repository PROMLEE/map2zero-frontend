import { atom } from 'recoil';

const reviewmodalState = atom<boolean>({
  key: 'reviewmodal',
  default: true,
});

export { reviewmodalState };
