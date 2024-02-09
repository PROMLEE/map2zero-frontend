import { atom } from 'recoil';

const eventDetailModal = atom<boolean>({
  key: 'eventDetailModal',
  default: false,
});

export { eventDetailModal };
