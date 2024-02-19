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

const productRegistModalState = atom<boolean>({
  key: 'productRegistModalState',
  default: false,
});

const eventManageModalState = atom<boolean>({
  key: 'eventManageModalState',
  default: false,
});

const shareModalState = atom({
  key: 'shareModal',
  default: false,
});

const detailModalState = atom({
  key: 'detailModal',
  default: false,
});
const eventDetailModal = atom<boolean>({
  key: 'eventDetailModal',
  default: false,
});

const popUpModalState = atom<boolean>({
  key: 'popUpModal',
  default: false,
});

export {
  reviewmodalState,
  productRegistModalState,
  eventManageModalState,
  tagitem,
  starRate,
  textRate,
  shareModalState,
  detailModalState,
  eventDetailModal,
  popUpModalState,
};
