import { atom } from 'recoil';

const reviewmodalState = atom<boolean>({
  key: 'reviewmodal',
  default: false,
});

const tagitem = atom<string[]>({
  key: 'tagitem',
  default: [],
});
const starRate = atom<number>({
  key: 'starRate',
  default: 0,
});

const textRate = atom<string>({
  key: 'textRate',
  default: '',
});

export { reviewmodalState, tagitem, starRate, textRate };
