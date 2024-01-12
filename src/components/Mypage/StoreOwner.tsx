import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const StoreOwner = () => {
  return <Owner to="/owner">점주 신청하기</Owner>;
};

export default StoreOwner;

const Owner = styled(Link)`
  margin: 1.3rem 0 3rem 0;
  width: 80%;
  font-size: 0.88rem;
  text-decoration: none;
  font-weight: bold;
  color: black;

  @media (max-width: 768px) {
    height: 2.94rem;
    width: 85%;
    border-radius: 0.5rem;
    font-size: 0.75rem;
    line-height: 2.94rem;
    background-color: rgba(242, 242, 242, 1);
    text-align: center;
  }
`;
