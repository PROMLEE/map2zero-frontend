import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MyStoreManagement = () => {
  return (
    <Wrap>
      {' '}
      <Title> 내 매장 관리</Title>
      <div>
        <Link to="/">
          <Btn>판매 제품 관리</Btn>
        </Link>
        <Link to="/">
          <Btn>진행중인 이벤트 관리</Btn>
        </Link>
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: calc(100vw - 10%);
  margin-left: 10%;
  @media (max-width: 768px) {
    width: calc(100vw - 5%);
    margin-left: 5%;
  }
  > div {
    display: flex;
    flex-direction: column;
    margin: 3rem 0 3rem 0;
  }
`;
const Title = styled.h1`
  margin: 2rem 0 0rem 1rem;
  font-size: 1.4rem;
  padding-top: 2rem;
  @media (max-width: 768px) {
    font-size: 3rem;
    padding: 0;
    margin: 4rem 0 0 2rem;
  }
`;

const Btn = styled.button`
  background-color: #0b5c71;
  border-radius: 8px;
  line-height: 4.8rem;
  height: 4.7rem;
  width: 29.2rem;
  text-align: center;
  color: white;
  font-size: 1.2rem;
  font-weight: bolder;
  margin-bottom: 1.5rem;
  cursor: pointer;
  @media (max-width: 768px) {
    /* line-height: 12rem;
    height: 12rem;
    width: 81.75rem;
    font-size: 3.5rem;
    margin-top: 8.75rem;
    margin-bottom: 5rem; */
  }
`;
export default MyStoreManagement;
