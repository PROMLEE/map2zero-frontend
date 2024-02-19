import { atom } from 'recoil';
import { SearchResultType } from './types';

export const searchToggleState = atom<number>({
  key: 'activeToggle',
  default: 0,
});

export const sellingProductSearchToggle = atom<boolean>({
  key: 'sellingProductSearchToggle',
  default: false,
});

export const searchResultState = atom<SearchResultType[]>({
  key: 'searchResultState',
  default: [],
});

export const searchTextState = atom<string>({
  key: 'searchTextState',
  default: '',
});
