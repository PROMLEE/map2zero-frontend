export interface Store {
  id: number;
  name: string;
  description: string;
  contact: string;
  homepage_url: string;
  instagram_url: string;
  bookmark_cnt: number;
  naver_map_url: string;
  review_cnt: number;
  average_score: number;
  store_product_cnt: number;
  address: {
    province: string;
    city: string;
    road_name: string;
    lot_number: string;
  };
  photos: [
    {
      url: string;
      width: number;
      height: number;
    },
  ];
  operating_hours: [
    {
      day_of_week: string;
      start_time: string;
      end_time: string;
      regular_holiday: boolean;
    },
  ];
  store_tags: [
    {
      id: number;
      name: string;
    },
  ];
  is_bookmarked: boolean;
}

export interface StoreProducttype {
  id: number;
  on_sale: boolean;
  refillable: boolean;
  main: boolean;
  price: number;
  name: string;
  photo: {
    url: string;
    width: number;
    height: number;
  };
}

export interface StoreEventtype {
  id: number;
  title: string;
  start_date: string;
  end_date: string;
  status: string;
  photo: {
    url: string;
    width: number;
    height: number;
  };
}

export interface StoreReviewtype {
  id: number;
  text: string;
  created_date: string;
  score: number;
  like_cnt: number;
  writer: {
    nickname: string;
    photo: {
      url: string;
      width: number;
      height: number;
    };
  };
  photos: [
    {
      url: string;
      width: number;
      height: number;
    },
  ];
  tags: [
    {
      id: number;
      name: string;
    },
  ];
  liked: boolean;
  isWriter: boolean;
}

export interface StoreReviewWrite {
  store_id: number;
  tag_ids: number[];
  score: number;
  text: string;
}
export interface EventDetailType {
  title: string;
  description: string;
  application_url: string;
  start_date: string;
  end_date: string;
  status: string;
  photos: [
    {
      url: string;
      width: number;
      height: number;
    },
  ];
  manager: boolean;
}
