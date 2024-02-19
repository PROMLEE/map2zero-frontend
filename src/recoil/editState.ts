import { atom, selector } from 'recoil';
import { InfoState } from '../recoil/Mypage/myPageState';

export const imgModalState = atom<boolean>({
  key: 'imgModal',
  default: false,
});

export const profileImgState = atom<string>({
  key: 'profileImg',
  default: selector({
    key: 'profileImgDefault',
    get: ({ get }) => {
      const info = get(InfoState);
      return info.photo.url;
    },
  }),
});

export const appliedprofileImgState = atom<File | null>({
  key: 'appliedprofileImg',
  default: null,
});

export const profileNameState = atom<string>({
  key: 'profileName',
  default: '선택한 파일이 없습니다',
});

export const nickNameState = atom<{ nickname: string; message: boolean; readonly: boolean }>({
  key: 'nickName',
  default: selector({
    key: 'nickNameDefault',
    get: ({ get }) => {
      const info = get(InfoState);
      return {
        nickname: info.nickname,
        message: false,
        readonly: false,
      };
    },
  }),
});

export const logoutModalState = atom<boolean>({
  key: 'logoutModal',
  default: false,
});

export const withdrawModalState = atom<boolean>({
  key: 'withdrawModal',
  default: false,
});
