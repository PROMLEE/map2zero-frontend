import { atom } from 'recoil';
const SearchState = atom({
  key: 'SearchState',
  default: '',
});

const ProductAdd = atom({
  key: 'ProductAdd',
  default: {
    name: '',
    tag_id: 0,
    price: 0,
  },
});

const ProductImg = atom<File[]>({
  key: 'ProductImg',
  default: [],
});

export { SearchState, ProductAdd, ProductImg };
