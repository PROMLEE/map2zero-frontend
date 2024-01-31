import { atom } from 'recoil';

export const imgModalState = atom<boolean>({
  key: 'imgModal',
  default: false,
});

export const profileImgState = atom<string>({
  key: 'profileImg',
  default: '',
});

export const nickNameState = atom<{ nickname: string; message: boolean; readonly: boolean }>({
  key: 'nickName',
  default: {
    nickname: '',
    message: false,
    readonly: false,
  },
});

export const logoutModalState = atom<boolean>({
  key: 'logoutModal',
  default: false,
});

export const withdrawModalState = atom<boolean>({
  key: 'withdrawModal',
  default: false,
});
