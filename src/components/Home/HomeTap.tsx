import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import HomeContents from './Contents/HomeContents';
const HomeTap = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabClickHandler = (index: number) => {
    setActiveIndex(index);
  };

  const tabContArr = [
    {
      tabTitle: (
        <TapTitle active={activeIndex === 0} onClick={() => tabClickHandler(0)}>
          <h1>추천</h1>
        </TapTitle>
      ),
      tabCont: <HomeContents />,
    },
    {
      tabTitle: (
        <TapTitle active={activeIndex === 1} onClick={() => tabClickHandler(1)}>
          <h1>최신</h1>
        </TapTitle>
      ),
      tabCont: <div> 탭2 내용 </div>,
    },
  ];
  return (
    <>
      <TapMenu>
        {tabContArr.map((section) => {
          return section.tabTitle;
        })}
      </TapMenu>
      <div>{tabContArr[activeIndex].tabCont}</div>
    </>
  );
};

const TapMenu = styled.ul`
  display: none;

  @media (max-width: 768px) {
    margin-top: 10rem;
    display: flex;
    width: 80rem;
    height: 9rem;
  }
`;
const TapTitle = styled.li<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  width: 40rem;
  h1 {
    font-size: 3.5rem;
  }

  ${(props) =>
    props.active &&
    css`
      color: #000000;
      border-bottom: 0.25rem solid;
    `}
`;
export default HomeTap;
