import { atom } from 'recoil';
import { UserInfo } from './types';

const UserInfoState = atom<UserInfo>({
  key: 'userinfo',
  default: {
    islogin: false,
    email: '',
    nickname: '',
    profile_photo: { url: '' },
    is_new_user: true,
    type: '',
  },
});

export default UserInfoState;
