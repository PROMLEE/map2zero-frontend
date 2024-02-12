import { atom } from 'recoil';
import { Store, StoreReviewWrite } from './types';

const StoreState = atom<Store>({
  key: 'StoreState',
  default: {
    id: 0,
    name: '',
    description: '',
    is_refillable: false,
    contact: '',
    homepage_url: '',
    instagram_url: '',
    bookmark_cnt: 0,
    review_cnt: 0,
    average_score: 0,
    store_product_cnt: 0,
    address: {
      province: '',
      city: '',
      road_name: '',
      lot_number: '',
    },
    photos: [''],
    operating_hours: [''],
    store_tags: [''],
    is_bookmarked: true,
  },
});

const ReviewWriteState = atom<StoreReviewWrite>({
  key: 'ReviewWrite',
  default: {
    store_id: 0,
    tag_ids: [],
    score: 0,
    text: '',
  },
});

const ReviewImgState = atom<File[]>({
  key: 'ReviewImgState',
  default: [],
});

export { StoreState, ReviewWriteState, ReviewImgState };
