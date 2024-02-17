import { authAPI } from './customApi';

export const getNicknameInuseApi = async (nickName: string) => {
  try {
    const response = await authAPI.get(`/avatars/nickname/inuse?nickname=${nickName}`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export const patchNicknameApi = async (data: any) => {
  try {
    const response = await authAPI.patch(`/avatars/nickname`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export const putPhotosApi = async (data: any) => {
  try {
    const response = await authAPI.put(`/avatars/photos`, data, { headers: { 'content-type': 'multipart/form-data' } });
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export const postLogoutApi = async () => {
  try {
    const response = await authAPI.post(`/logout`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
