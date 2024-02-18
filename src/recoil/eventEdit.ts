import { atom } from 'recoil';

interface StoreReviewWrite {
  title: string;
  start_date: string;
  end_date: string;
  apply_url: string;
  text: string;
}
const EventEditState = atom<StoreReviewWrite>({
  key: 'EventEditState',
  default: {
    title: '',
    start_date: `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${String(
      new Date().getDate(),
    ).padStart(2, '0')}`,
    end_date: `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${String(
      new Date().getDate(),
    ).padStart(2, '0')}`,
    apply_url: '',
    text: '',
  },
});

const EventImgState = atom<File[]>({
  key: 'EventImgState',
  default: [],
});

export { EventEditState, EventImgState };
