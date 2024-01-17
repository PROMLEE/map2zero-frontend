import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { searchToggleState } from '../../recoil/searchToggleState';

export const SearchToggle = () => {
  const [activeToggle, setActiveToggle] = useRecoilState(searchToggleState);

  const toggleOptions = [
    { label: '매장명', value: 0 },
    { label: '제품명', value: 100 },
  ];

  return (
    <ToggleWrapper>
      <ToggleBackground $activeToggle={activeToggle} />
      {toggleOptions.map(({ label, value }) => (
        <ToggleButton key={value} $active={activeToggle === value} onClick={() => setActiveToggle(value)}>
          {label}
        </ToggleButton>
      ))}
    </ToggleWrapper>
  );
};

const ToggleWrapper = styled.div`
  display: inline-flex;
  position: relative;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 20px;
  width: 108px;
  height: 30px;
  cursor: pointer;
`;

const ToggleBackground = styled.div<{ $activeToggle: number }>`
  position: absolute;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  width: 54px;
  height: 30px;
  z-index: 10;
  transition: all 300ms ease-in-out;
  transform: ${(props) => (props.$activeToggle === 0 ? 'translateX(0)' : 'translateX(100%)')};
`;

const ToggleButton = styled.div<{ $active: boolean }>`
  flex: 1;
  border-radius: 20px;
  transition: all 300ms ease-in-out;
  color: ${(props) => (props.$active ? '#565656' : '#E0E0E0')};
  z-index: 10;

  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 12px;
  font-weight: 400;
`;
