import { useRecoilCallback, useSetRecoilState } from 'recoil';
import { DeleteIdState, ReviewsState } from '../../recoil/Mypage/myPageState';
import { ReviewModalState } from '../../recoil/confirmModal';
import { ReviewsDeleteApi } from '../../apis/Mypage/ReviewApi';
import { ReviewType } from '../../recoil/Mypage/myPageStateType';
import ConfirmModal from './ConfirmModal';

const ReviewModal = () => {
  const setModalOpen = useSetRecoilState(ReviewModalState);

  const onDeleteItem = useRecoilCallback(
    ({ snapshot, set }) =>
      async () => {
        setModalOpen(false);
        const latestDeleteState = await snapshot.getPromise(DeleteIdState);
        await ReviewsDeleteApi({ review_id: latestDeleteState.review_id });
        const currentItems: ReviewType[] = await snapshot.getPromise(ReviewsState);
        set(
          ReviewsState,
          currentItems.filter((item) => item.id !== latestDeleteState.review_id),
        );
      },

    [],
  );

  return <ConfirmModal onRequestClose={onDeleteItem} type="리뷰"></ConfirmModal>;
};

export default ReviewModal;
