import { authAPI } from '../customApi';

const BookMarksGetApi = async () => {
  try {
    const response = await authAPI.get(`my-page/bookmarks`, {
      params: {
        size: 10,
      },
    });
    return response.data;
  } catch (e) {
    console.log(e);
    alert('연동 에러');
  }
};

const BookMarksDeleteApi = async (data: any) => {
  try {
    const response = await authAPI.delete('/bookmarks', { data: data });

    return response.data;
  } catch (e) {
    console.log(e);
    alert('연동 에러');
  }
};

export { BookMarksGetApi, BookMarksDeleteApi };
