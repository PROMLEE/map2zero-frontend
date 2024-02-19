import { atom } from 'recoil';
import { UserInfo } from './types';

const UserInfoState = atom<UserInfo>({
  key: 'userinfo',
  default: {
    islogin: false,
    ismanager: false,
    email: '',
    nickname: '',
    photo: { url: '' },
    is_new_user: true,
    type: '',
  },
});

const UserState = atom({
  key: 'UserCode',
  default: { state: '', token: '' },
});

export { UserInfoState, UserState };
