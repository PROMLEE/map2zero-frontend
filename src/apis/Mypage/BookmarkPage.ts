import { authAPI } from '../customApi';

const BookMarksGetPage = async () => {
  try {
    const response = await authAPI.get(`my-page/bookmarks`, {
      params: {
        size: 100,
      },
    });
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
    alert('연동 에러');
  }
};

export { BookMarksGetPage };
