import { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { BookMarkStateSelector, BookMarksState, DeleteIdState } from '../../recoil/Mypage/myPageState';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { BookMarkModalState } from '../../recoil/confirmModal';
import BookMarkModal from '../Modal/BookMarkModal';

const BookMarkList = () => {
  const navigate = useNavigate();
  const [displayItems, setDisplayItems] = useRecoilState(BookMarksState);
  const items = useRecoilValue(BookMarkStateSelector);
  const [modalOpen, setModalOpen] = useRecoilState(BookMarkModalState);
  const setDeleteIdState = useSetRecoilState(DeleteIdState);

  const handleResize = useCallback(() => {
    const newData = window.innerWidth < 784 && items ? items.slice(0, 2) : items;
    setDisplayItems(newData);
  }, [items]);

  useEffect(() => {
    setDisplayItems(items);
  }, [items, setDisplayItems]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  const modalHandler = (id: number) => {
    setModalOpen(true);
    setDeleteIdState((prevState: any) => ({
      ...prevState,
      review_id: null,
      store_id: id,
      type: 'bookmarks',
    }));
  };

  return (
    <Wrap>
      <div>
        <BookMarkTitle> 내가 북마크한 매장</BookMarkTitle>
        <MoreDetails to={`/bookmarkdetail`}>더보기 {'>'}</MoreDetails>
      </div>
      {displayItems && displayItems.length > 0 ? (
        <BookMarks>
          <div>
            {displayItems.map((i: any) => (
              <BookMark
                key={i.id}
                onClick={() => {
                  navigate(`/store/${i.id}`);
                }}
              >
                <StoreImg
                  src={i.photo?.url || `${process.env.PUBLIC_URL}/assets/MyPage/lightgray.png`}
                  alt={`${i.name}의 이미지`}
                />
                <BookMarkIcon
                  src={`${process.env.PUBLIC_URL}/assets/StoreDetail/bookmark_o.svg`}
                  alt="북마크아이콘"
                  onClick={(e) => {
                    e.stopPropagation(); // 이벤트 버블링 방지
                    modalHandler(i.id);
                  }}
                />
                <h3>{i.name}</h3>
                <p>{i.address.province + ' ' + i.address.city}</p>
              </BookMark>
            ))}
          </div>
        </BookMarks>
      ) : (
        <NoBookMark>북마크한 매장이 없습니다</NoBookMark>
      )}
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 80%;
  > div {
    margin-top: 4rem;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    width: calc(100vw - 5%);
    margin-left: 5%;
    > div {
      margin-top: 6rem;
    }
  }
`;

const MoreDetails = styled(Link)`
  font-size: 1.2rem;
  color: #565656;
  text-decoration: none;
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-right: 10%;
  }
`;

const BookMarkTitle = styled.h1`
  margin: 0 0 0 1rem;
  font-size: 1.4rem;
  padding-top: 2rem;
  @media (max-width: 768px) {
    font-size: 3rem;
    padding: 0;
    margin: 0 0 0 2rem;
  }
`;

const BookMarks = styled.div`
  display: flex;
  margin-bottom: 20rem;
  > div {
    display: flex;
    justify-content: flex-start;
    width: 100%;
  }

  height: 30rem;
  width: 100%;

  padding: 3rem 0 3rem 1rem;
  overflow-x: hidden;
  /* 인터넷 익스플로러를 위한 스타일 */
  -ms-overflow-style: none;

  /* 파이어폭스를 위한 스타일 */
  scrollbar-width: none;

  /* 웹킷(크롬, 사파리, 새로운 엣지) 브라우저를 위한 스타일 */
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 768px) {
    height: 55rem;
    padding: 5rem 0 5rem 2rem;
    overflow-x: auto;
  }
`;

const BookMark = styled.div`
  margin-right: 2.4rem;
  width: 16.2rem;
  height: 23.5rem;
  border: solid;
  border-color: #d9d9d9;
  border-width: 1px;
  border-radius: 8px;
  flex-shrink: 0;
  position: relative;
  cursor: pointer;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    transform: scale(1.1);
  }
  & > h3 {
    font-size: 1.4rem;
    margin: 1rem;
  }
  & > p {
    font-size: 1rem;
    margin: 0 0 0 1rem;
    color: rgba(86, 86, 86, 1);
  }
  @media (max-width: 768px) {
    width: 30rem;
    height: 45rem;
    margin-right: 4rem;

    & > h3 {
      font-size: 3rem;
      margin: 1.5rem;
    }
    & > p {
      font-size: 2rem;
      margin: 3rem 0 0 1.5rem;
    }
  }
`;

const StoreImg = styled.img`
  width: 100%;
  height: 16.2rem;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  @media (max-width: 768px) {
    height: 30rem;
  }
`;

const BookMarkIcon = styled.img`
  width: 1.5rem;
  height: 2rem;
  position: absolute;
  bottom: 8rem;
  right: 1rem;
  @media (max-width: 768px) {
    bottom: 16rem;
    right: 2rem;
    width: 3rem;
    height: 3.75rem;
  }
`;

const NoBookMark = styled.div`
  width: 80%;
  margin-left: 1rem;
  height: 5rem;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    height: 12.5rem;
    margin-left: 2rem;
    font-size: 3.5rem;
  }
`;

export default BookMarkList;
