import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import HomeContents from './Contents/HomeContents';

const HomeTap = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = [
    { title: '추천', content: <HomeContents /> },
    { title: '최신', content: <div> 탭2 내용 </div> },
  ];

  return (
    <>
      <TapMenu>
        {tabs.map((tab, index) => (
          <TapTitle key={index} active={activeIndex === index} onClick={() => setActiveIndex(index)}>
            <h1>{tab.title}</h1>
          </TapTitle>
        ))}
      </TapMenu>
      <div>{tabs[activeIndex].content}</div>
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
const TapTitle = styled.li.withConfig({
  shouldForwardProp: (prop) => prop !== 'active', //active라는 이름의 prop이 DOM 요소로 전달되지 X
})<{ active: boolean }>`
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
      border-bottom: 0.25rem solid;
    `}
`;

export default HomeTap;
