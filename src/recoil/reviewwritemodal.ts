import { atom } from 'recoil';

const reviewmodalState = atom<boolean>({
  key: 'reviewmodal',
  default: true,
});

const tagitem = atom<string[]>({
  key: 'tagitem',
  default: [],
});

export { reviewmodalState, tagitem };
