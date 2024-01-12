import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const StoreOwner = () => {
  return <Owner to="/owner">점주 신청하기</Owner>;
};

export default StoreOwner;

const Owner = styled(Link)`
  margin: 2rem 0 1rem 0;
  width: 80%;
  font-size: 0.88rem;
  text-decoration: none;
  font-weight: bold;
  color: black;
`;
