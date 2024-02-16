import { authAPI } from '../customApi';

const Bookmark: any = async (data: any) => {
  try {
    const response = await authAPI.post(`/bookmarks`, data);
    return response.data;
  } catch (e) {
    console.log(e);
    alert('연동 에러');
  }
};
const BookmarkDel: any = async (data: any) => {
  try {
    const response = await authAPI.delete(`/bookmarks`, { data: data });
    return response.data;
  } catch (e) {
    console.log(e);
    alert('연동 에러');
  }
};
export { Bookmark, BookmarkDel };
