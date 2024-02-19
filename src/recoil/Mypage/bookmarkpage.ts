import { selector } from 'recoil';
import { BookMarksGetPage } from '../../apis/Mypage/BookmarkPage';

export const MyBookmarksState = selector({
  key: 'MyBookmarksState',
  get: async () => {
    const data = await BookMarksGetPage();
    return data.data;
  },
});
