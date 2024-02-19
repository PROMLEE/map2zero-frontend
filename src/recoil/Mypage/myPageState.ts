import { atom, selector } from 'recoil';
import PersonalInfoApi from '../../apis/Mypage/PersonalInfoApi';
import ManagerStoreApi from '../../apis/Mypage/ManagerStoreApi';
import { ReviewsGetApi } from '../../apis/Mypage/ReviewApi';
import { BookMarksGetApi } from '../../apis/Mypage';
import { BookmarkType, ReviewType } from './myPageStateType';

export const InfoStateSelector = selector({
  key: 'InfoStateSelector',
  get: async () => {
    const data = await PersonalInfoApi();
    return data.data;
  },
});

export const ManagerStoreSelector = selector({
  key: 'ManagerStoreSelector',
  get: async () => {
    const data = await ManagerStoreApi();
    return data?.data;
  },
});

export const ReviewStateSelector = selector({
  key: 'ReviewStateSelector',
  get: async () => {
    const data = await ReviewsGetApi();
    return data.data;
  },
});
export const BookMarkStateSelector = selector({
  key: 'BookMarkStateSelector',
  get: async () => {
    const data = await BookMarksGetApi();
    return data.data;
  },
});

export const BookMarksState = atom<BookmarkType[]>({
  key: 'BookMarksState',
  default: [],
});

export const ReviewsState = atom<ReviewType[]>({
  key: 'ReviewsState',
  default: [],
});

export const DeleteIdState = atom({
  key: 'DeleteIdState',
  default: {
    review_id: null,
    store_id: null,
    type: 'bookmarks',
  },
});
