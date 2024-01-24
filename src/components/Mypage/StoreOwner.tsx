import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const StoreOwner = () => {
  return <Owner to="/owner">점주 신청하기</Owner>;
};

export default StoreOwner;

const Owner = styled(Link)`
  margin: 4rem 0 3rem 1rem;
  width: 80%;
  font-size: 1.4rem;
  text-decoration: none;
  font-weight: bold;
  color: black;

  @media (max-width: 768px) {
    margin: 6rem 0 3rem 0;
    height: 11.75rem;
    width: 81.75rem;
    border-radius: 8px;
    font-size: 3rem;
    line-height: 11.75rem;
    background-color: rgba(242, 242, 242, 1);
    text-align: center;
  }
`;
