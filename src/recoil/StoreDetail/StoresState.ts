import { atom } from 'recoil';
import { EventDetailType, Store, StoreReviewWrite } from './types';

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
    photos: [
      {
        url: '',
        width: 0,
        height: 0,
      },
    ],
    operating_hours: [
      {
        day_of_week: '',
        start_time: '',
        end_time: '',
        regular_holiday: true,
      },
    ],
    store_tags: [
      {
        id: 0,
        name: '',
      },
    ],
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

const EventId = atom<number>({
  key: 'EventId',
  default: 0,
});

const EventDetailState = atom<EventDetailType>({
  key: 'EventDetailState',
  default: {
    title: 'string',
    description: 'string',
    application_url: 'string',
    start_date: 'string',
    end_date: 'string',
    status: 'string',
    photos: [
      {
        url: 'string',
        width: 0,
        height: 0,
      },
    ],
    manager: false,
  },
});

export { StoreState, ReviewWriteState, ReviewImgState, EventId, EventDetailState };
