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
