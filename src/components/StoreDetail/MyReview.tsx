import { useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { MyReviewState } from '../../recoil';

interface Props {
  nickname: string;
  star: number;
  tag: string[];
  url: string;
  reviewurl: string[];
  text: string;
  like: number;
  code: number;
  id: number;
}

export const MyReview = ({ nickname, star, tag, url, reviewurl, text, like, code, id }: Props) => {
  const [likeon, setlike] = useState(false);
  const [reviews, setReviews] = useRecoilState(MyReviewState);

  const increaseLike = (index: number) => {
    setReviews((prevReviews) => {
      const newReviews = [...prevReviews]; // 불변성을 위해 복사본 생성
      newReviews[index] = { ...newReviews[index], like: newReviews[index].like + 1 }; // 해당 리뷰의 like 값을 수정
      return newReviews;
    });
  };
  const decreaseLike = (index: number) => {
    setReviews((prevReviews) => {
      const newReviews = [...prevReviews]; // 불변성을 위해 복사본 생성
      newReviews[index] = { ...newReviews[index], like: newReviews[index].like - 1 }; // 해당 리뷰의 like 값을 수정
      return newReviews;
    });
  };
  return (
    <Box>
      <ReviewTop>
        <Profile>
          <ProfileImg src={url} />
          <ProfileBox>
            <Nickname>{nickname}</Nickname>
            <Stars>
              {[...Array(5)].map((_, index) => (
                <Rate
                  key={index}
                  src={
                    index < star
                      ? `${process.env.PUBLIC_URL}/assets/StoreDetail/star_full.png`
                      : `${process.env.PUBLIC_URL}/assets/StoreDetail/star_empty.png`
                  }
                  alt={`Star ${index}`}
                />
              ))}
            </Stars>
          </ProfileBox>
        </Profile>
        <LikeBox>
          <LikeImg
            src={
              likeon
                ? `${process.env.PUBLIC_URL}/assets/StoreDetail/like.png`
                : `${process.env.PUBLIC_URL}/assets/StoreDetail/not_like.png`
            }
            onClick={() => {
              likeon ? decreaseLike(id) : increaseLike(id);
              setlike(!likeon);
            }}
          />
          <LikeNum>{like}</LikeNum>
        </LikeBox>
      </ReviewTop>
      <ReviewBottom>
        <ReviewImgBox>
          {reviewurl.map((item, index) => (
            <ReviewImg src={item} alt={`${index}`} key={index} />
          ))}
        </ReviewImgBox>
        <ReviewTagBox>
          {tag.map((item, index) => (
            <ReviewTag>{item}</ReviewTag>
          ))}
        </ReviewTagBox>
        <ReviewText>{text}</ReviewText>
      </ReviewBottom>
    </Box>
  );
};

const Box = styled.div`
  width: 92.4rem;
  display: flex;
  flex-direction: column;
  border-top: 0.5px solid #f2f2f2;
  border-bottom: 0.5px solid #f2f2f2;
`;
const ReviewTop = styled.div`
  display: flex;
  padding: 1.6rem 1.6rem 0rem 1.6rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;
const Profile = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.6rem;
`;
const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.6rem;
`;

const Nickname = styled.div`
  width: 14.3rem;
  height: 1.7rem;
  overflow: hidden;
  color: #000;

  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'Noto Sans KR';
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Stars = styled.div`
  display: flex;
`;
const Rate = styled.img`
  width: 1.2rem;
  height: 1.2rem;
`;
const LikeBox = styled.div`
  display: flex;
  padding: 0.8rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const LikeImg = styled.img`
  width: 1.6rem;
  height: 1.5rem;
  &:hover {
    cursor: pointer;
  }
`;

const LikeNum = styled.div`
  color: #565656;
  font-family: 'Noto Sans KR';
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ReviewBottom = styled.div`
  display: flex;
  padding: 1.6rem 1.6rem 1.6rem 8rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
`;

const ProfileImg = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 100%;
`;

const ReviewImgBox = styled.div`
  display: flex;
  gap: 0.2rem;
  width: 100%;
  flex-wrap: wrap;
`;
const ReviewImg = styled.img`
  width: 8.9rem;
  height: 8.9rem;
`;
const ReviewTagBox = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
`;
const ReviewTag = styled.div`
  margin-top: 0.5rem;
  height: 2.2rem;
  padding: 0.4rem 0.8rem;
  color: #fff;
  text-align: center;
  font-family: 'Noto Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  border-radius: 1.6rem;
  background: #74b69d;
  line-height: normal;
  &:hover {
    cursor: pointer;
  }
`;

const ReviewText = styled.div`
  width: 81.3rem;
  color: #565656;
  font-family: 'Noto Sans KR';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-overflow: visible;
  white-space: pre-line;
`;
