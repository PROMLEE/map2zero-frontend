export interface Address {
  province: string;
  city: string;
  road_name: string;
  lot_number: string;
}

export interface Store {
  id: number;
  name: string;
  address: Address;
}

export interface ReviewType {
  id: number;
  text: string;
  createdDate: string;
  score: number;
  likeCnt: number;
  store: Store;
  photo: string | null;
  liked: boolean;
  writer: boolean;
  isWriter: boolean;
}

export interface BookmarkType {
  store_id: number;
  id: number;
  name: string;
  address: {
    province: string;
    city: string;
    road_name: string;
    lot_number: string;
  };
  summary: string;
  photo: {
    url: string;
    width: number;
    height: number;
  };
}

export interface managerStoreType {
  id: number;
  name: string;
  address: {
    province: string;
    city: string;
    road_name: string;
    lot_number: string;
  };
}
