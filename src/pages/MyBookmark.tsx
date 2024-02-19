import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Mobiletop from '../components/Mobiletop';
import { MyBookmarksState } from '../recoil/Mypage/bookmarkpage';
import { useRecoilValue } from 'recoil';
import { useState } from 'react';
import { Bookmark, BookmarkDel } from '../apis/StoreDetail/Bookmark';

export const BookMarkCard = ({ i }: { i: any }) => {
  const navigate = useNavigate();
  const [onbookmark, setonbookmark] = useState(true);
  const onclickBookmark = async (event: any) => {
    event.stopPropagation();
    onbookmark ? await BookmarkDel({ store_id: i.id }) : await Bookmark({ store_id: i.id });
    setonbookmark(!onbookmark);
  };

  return (
    <BookMark onClick={() => navigate(`/store/${i.id}`)}>
      <StoreImg
        src={i.photo ? i.photo.url : `${process.env.PUBLIC_URL}/assets/MyPage/lightgray`}
        alt={`${i.storeName}의 이미지`}
      />
      <BookMarkIcon
        onClick={(event) => {
          onclickBookmark(event);
        }}
        src={
          onbookmark
            ? `${process.env.PUBLIC_URL}/assets/StoreDetail/bookmark_o.svg`
            : `${process.env.PUBLIC_URL}/assets/StoreDetail/bookmark_x.svg`
        }
        alt="북마크아이콘"
      />
      <h3>{i.name}</h3>
      <p>
        {i.address.province} {i.address.city} {i.address.road_name}
      </p>
    </BookMark>
  );
};
export const MyBookmark = () => {
  const list = useRecoilValue(MyBookmarksState);
  return (
    <>
      <Mobiletop pagename="내가 북마크한 매장" />
      <Wrap>
        <BookMarkTitle> 내가 북마크한 매장</BookMarkTitle>
        <BookMarks>
          {list.map((i: any, index: number) => {
            return <BookMarkCard i={i} key={index} />;
          })}
        </BookMarks>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 92.4rem;
  margin: 0 auto;
  padding-bottom: 20rem;
  @media (max-width: 768px) {
    width: 85%;
  }
`;

const BookMarkTitle = styled.div`
  margin-top: 40px;
  font-size: 1.6rem;
  padding-top: 2rem;
  font-weight: 600;
  @media (max-width: 768px) {
    display: none;
  }
`;

const BookMarks = styled.div`
  margin-top: 40px;
  width: 928px;
  flex-wrap: wrap;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 768px) {
    width: 100%;
    gap: 2%;
  }
`;

const BookMark = styled.div`
  width: 16.2rem;
  height: 23rem;
  border: solid;
  border-color: #d9d9d9;
  border-width: 1px;
  border-radius: 8px;
  flex-shrink: 0;
  position: relative;
  cursor: pointer;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    /* transform: scale(1.1); */
  }
  & > h3 {
    font-size: 1.4rem;
    margin: 1rem;
  }
  & > p {
    font-size: 1rem;
    margin: 1rem 0 0 1rem;
    line-height: 120%;
    color: rgba(86, 86, 86, 1);
  }
  @media (max-width: 768px) {
    width: 49%;
    height: 50rem;
    margin-bottom: 2rem;
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
    height: 35rem;
  }
`;

const BookMarkIcon = styled.img`
  width: 2rem;
  height: 2.3rem;
  position: absolute;
  bottom: 7.5rem;
  right: 1rem;
  @media (max-width: 768px) {
    bottom: 17rem;
    right: 3rem;
    width: 5rem;
    height: 5.5rem;
  }
`;
