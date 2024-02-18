export interface exampleType {
  text: string;
  nums: number;
}
export interface ReviewType {
  nickname: string;
  date: string;
  star: number;
  tag: string[];
  url: string;
  reviewurl: string[];
  text: string;
  like: number;
  code: number;
}
export interface UserInfo {
  islogin: boolean;
  email: string;
  nickname: string;
  photo: {
    url: string;
  };
  is_new_user: boolean;
  type: string;
}

