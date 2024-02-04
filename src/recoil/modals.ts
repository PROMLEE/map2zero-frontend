import { atom } from 'recoil';

const reviewmodalState = atom<boolean>({
  key: 'reviewmodal',
  default: false,
});

const productRegistModalState = atom<boolean>({
  key: 'productRegistModalState',
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

const eventManageModalState = atom<boolean>({
  key: 'eventManageModalState',
  default: false,
});
const productName = atom<string>({
  key: 'productName',
  default: '',
});
const productPrice = atom<string>({
  key: 'productPrice',
  default: '',
});
const productCategory = atom<string[]>({
  key: 'productCategory',
  default: [],
});
const productPic = atom<File[]>({
  key: 'productPic',
  default: [],
});
export {
  reviewmodalState,
  productRegistModalState,
  eventManageModalState,
  tagitem,
  starRate,
  textRate,
  productName,
  productPrice,
  productCategory,
  productPic,
};
