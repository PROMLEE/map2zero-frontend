import { useRecoilCallback, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { BookMarksDeleteApi } from '../../apis/Mypage';
import { BookMarksState, DeleteIdState } from '../../recoil/Mypage/myPageState';
import { BookMarkModalState } from '../../recoil/confirmModal';
import { BookmarkType } from '../../recoil/Mypage/myPageStateType';
import ConfirmModal from './ConfirmModal';

const BookMarkModal = () => {
  const setModalOpen = useSetRecoilState(BookMarkModalState);

  const onDeleteItem = useRecoilCallback(
    ({ snapshot, set }) =>
      async () => {
        setModalOpen(false); //상태 최신값 참조 X -> false로
        const latestDeleteState = await snapshot.getPromise(DeleteIdState);
        await BookMarksDeleteApi({ store_id: latestDeleteState.store_id });
        const currentItems: BookmarkType[] = await snapshot.getPromise(BookMarksState);
        set(
          BookMarksState,
          currentItems.filter((item) => item.id !== latestDeleteState.store_id),
        );
      },

    [],
  );

  return <ConfirmModal onRequestClose={onDeleteItem} type="북마크"></ConfirmModal>;
};

export default BookMarkModal;

const Message = styled.h1`
  font-weight: border;
  font-size: 2rem;
  margin-bottom: 5rem;
  @media (max-width: 768px) {
    margin-bottom: 8rem;
    font-size: 5rem;
  }
`;
const Close = styled.img`
  width: 1.5rem;
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
`;
const BtnWrap = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
`;
const ConfirmBtn = styled.button`
  background-color: rgba(242, 242, 242, 1);
  width: 20rem;
  height: 4.7rem;
  font-size: 1.2rem;
  margin: 0 0.5rem 0 0.5rem;
  border: 0;
  border-radius: 8px;
  font-weight: bolder;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 81.75rem;
    height: 11.75rem;
    font-size: 3rem;
    margin-bottom: 3rem;
  }
`;
