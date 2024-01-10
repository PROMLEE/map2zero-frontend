import React from 'react';
import styled from 'styled-components';
import { ReviewDummy } from './Dummy/ReviewDummy';
const ReviewList = () => {
  return (
    <Reviews>
      내가 쓴 리뷰
      {ReviewDummy.map((i) => (
        <li key={i.storeName}>
          <img src={`assets/${i.photo}`} alt={`${i.storeName}}의 이미지`} />
          <h3>{i.storeName}</h3>
          <p>{i.content}</p>
        </li>
      ))}
    </Reviews>
  );
};

const Reviews = styled.ul`
  display: flex;
  & > li {
    list-style: none;
    margin: 5rem;
  }
`;
export default ReviewList;
