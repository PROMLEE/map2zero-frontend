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
  ismanager: boolean;
  email: string;
  nickname: string;
  photo: {
    url: string;
  };
  is_new_user: boolean;
  type: string;
}

export type Product = {
  id: number;
  name: string;
};

export interface SearchResultType {
  id: number;
  name: string;
  bookmark_cnt: number;
  review_cnt: number;
  average_score: number;
  address: {
    province: string;
    city: string;
    road_name: string;
    lot_number: string;
  };
  photo: {
    url: string;
    width: number;
    height: number;
  };
  products: Product[];
  bookmarked: boolean;
}
export interface StoreTagtype {
  id: number;
  name: string;
  color: string;
  category: string;
}
