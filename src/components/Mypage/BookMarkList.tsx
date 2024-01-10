import React from 'react';
import { BookMarkDummy } from './Dummy/BookMarkDummy';
import styled from 'styled-components';

const BookMarkList = () => {
  return (
    <BookMarks>
      {' '}
      내가 북마크한 매장
      {BookMarkDummy.map((i) => (
        <li key={i.storeName}>
          <img src={`assets/${i.photo}`} alt={`${i.storeName}}의 이미지`} />
          <h3>{i.storeName}</h3>
          <p>{i.address}</p>
        </li>
      ))}
    </BookMarks>
  );
};

const BookMarks = styled.ul`
  display: flex;
  & > li {
    list-style: none;
    margin: 5rem;
  }
`;

export default BookMarkList;
