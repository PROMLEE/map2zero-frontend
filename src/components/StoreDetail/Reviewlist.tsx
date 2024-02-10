import styled from 'styled-components';
import { Review, MyReview } from '../StoreDetail';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { reviewmodalState, ReviewState, MyReviewState } from '../../recoil';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Reviewlist = () => {
  const setModal = useSetRecoilState(reviewmodalState);
  const reviewlist = useRecoilValue(ReviewState);
  const myreviewlist = useRecoilValue(MyReviewState);
  const [activeToggle, setActiveToggle] = useState(true);
  const total_elements = 32;
  const size = 10;
  const toggleOptions = [
    { label: '인기순', value: activeToggle },
    { label: '최신순', value: !activeToggle },
  ];
  const totalPages = Math.ceil(total_elements / size);
  const [currentPage, setcurrentPage] = useState(1);
  const noPrev = currentPage === 1;
  const noNext = currentPage === totalPages; // 다음 페이지가 없는 경우
  const buttonClick = (n: number) => {
    setcurrentPage(n + 1);
  };
  return (
    <SellingBox>
      <Title>
        <ReviewTitle>
          리뷰 <span>(42)</span>
        </ReviewTitle>
        <RightText onClick={() => setModal(true)}>리뷰쓰기</RightText>
      </Title>
      <MyReviewbox>
        <MyReviewText>내가 쓴 리뷰</MyReviewText>
        {myreviewlist.map((item, index) => {
          return <MyReview {...item} id={index} key={index} />;
        })}
      </MyReviewbox>
      <ToggleWrapper>
        <ToggleBackground $activeToggle={activeToggle} />
        {toggleOptions.map(({ label, value }, index) => (
          <ToggleButton key={index} $active={value} onClick={() => setActiveToggle(!activeToggle)}>
            {label}
          </ToggleButton>
        ))}
      </ToggleWrapper>
      <Reviews>
        {reviewlist.map((item, index) => {
          return <Review {...item} id={index} key={index} />;
        })}
      </Reviews>
      <ul>
        {noPrev ? null : (
          <PageButton
            onClick={() => {
              setcurrentPage(currentPage - 1);
            }}
            $url={'url(assets/StoreDetail/LeftStroke.svg)'}
          />
        )}
        {[...Array(totalPages)].map((a, i) => (
          <PageNum onClick={() => buttonClick(i)} key={i} $current={i + 1 === currentPage}>
            {i + 1}
          </PageNum>
        ))}
        {noNext ? null : (
          <PageButton
            onClick={() => {
              setcurrentPage(currentPage + 1);
            }}
            $url={'url(assets/StoreDetail/RightStroke.svg)'}
          />
        )}
      </ul>
    </SellingBox>
  );
};
const PageButton = styled.li<{ $url: string }>`
  background: ${(props) => props.$url} center no-repeat;
  width: 0.7rem;
  height: 1.2rem;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 1.8rem;
    height: 3rem;
  }
`;

const PageNum = styled.li<{ $current: boolean }>`
  font-size: ${(props) => (props.$current ? '1.5rem;' : '1.2rem')};
  padding: 0.5rem;
  color: ${(props) => (props.$current ? '#0b5c71' : 'black')};
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    padding: 1.2rem;
    font-size: ${(props) => (props.$current ? '4rem;' : '3rem')};
  }
`;
const SellingBox = styled.div`
  width: 92.4rem;
  display: flex;
  margin-top: 4rem;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 90%;
    margin-top: 5.25rem;
  }
  ul {
    list-style: none;
    margin-bottom: 10rem;
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    @media (max-width: 768px) {
      margin-bottom: 25rem;
      gap: 5rem;
      height: 10rem;
    }
  }
`;
const Title = styled.div`
  display: flex;
  height: 2.2rem;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    height: 6.25rem;
  }
`;
const ReviewTitle = styled.div`
  color: #000;
  font-family: 'Noto Sans KR';
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 4.5rem;
  }
  span {
    color: #848484;
  }
`;
const RightText = styled.div`
  color: #565656;
  font-family: 'Noto Sans KR';
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const MyReviewText = styled.div`
  width: 100%;
  height: 3.2rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.7rem 0.7rem 0rem 0rem;
  background: #f4ece1;
  color: #848484;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: normal;
  @media (max-width: 768px) {
    width: 100%;
    height: 8rem;
    padding: 2rem 4rem;
    gap: 2.5rem;
    border-radius: 1.7rem 1.7rem 0rem 0rem;
    font-size: 3rem;
  }
`;

const MyReviewbox = styled.div`
  width: 92.4rem;
  margin-top: 2.4rem;
  border-radius: 0.8rem;
  border: 1px solid #f4ece1;
  @media (max-width: 768px) {
    border-radius: 2rem;
  }
`;

const ToggleWrapper = styled.div`
  margin-top: 1.6rem;
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 2rem;
  width: 10.8rem;
  height: 3rem;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-top: 4rem;
    border-radius: 5rem;
    width: 27rem;
    height: 7.5rem;
  }
`;

const ToggleBackground = styled.div<{ $activeToggle: boolean }>`
  position: absolute;
  border-radius: 2rem;
  background-color: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  width: 5.4rem;
  height: 3rem;
  transition: all 300ms ease-in-out;
  transform: ${(props) => (props.$activeToggle ? 'translateX(0)' : 'translateX(100%)')};
  @media (max-width: 768px) {
    display: flex;
    height: 7.5rem;
    width: 13.5rem;
    padding: 1.25rem 2.5rem;
    justify-content: center;
    align-items: center;
    border-radius: 5rem;
  }
`;

const ToggleButton = styled.div<{ $active: boolean }>`
  flex: 1;
  border-radius: 2rem;
  transition: all 300ms ease-in-out;
  color: ${(props) => (props.$active ? '#565656' : '#E0E0E0')};
  z-index: 2;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 1.2rem;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Reviews = styled.div`
  width: 92.4rem;
  display: flex;
  flex-direction: column;
  margin-top: 0.8rem;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 15rem;
  }
`;
