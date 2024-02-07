import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { eventDate } from '../../recoil';
import DatePicker from 'react-datepicker';
import { LegacyRef, forwardRef, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

export const EventDate = () => {
  const setDate = useSetRecoilState(eventDate);
  const onInputHandler = (e: any) => {
    setDate(e.target.value);
  };
  const CustomStart = forwardRef(({ value, onClick }: any, ref: LegacyRef<HTMLButtonElement> | undefined) => (
    <StartDate className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </StartDate>
  ));
  const CustomEnd = forwardRef(({ value, onClick }: any, ref: LegacyRef<HTMLButtonElement> | undefined) => (
    <EndDate className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </EndDate>
  ));
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <Namebox>
      <DatePicker
        dateFormat={'시작일 yyyy.MM.dd'}
        selected={startDate}
        onChange={(date: Date) => setStartDate(date ? date : new Date())}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        customInput={<CustomStart />}
      />
      <DatePicker
        dateFormat={'종료일 yyyy.MM.dd'}
        selected={endDate}
        onChange={(date: Date) => setEndDate(date ? date : new Date())}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        customInput={<CustomEnd />}
      />
    </Namebox>
  );
};

const Namebox = styled.div`
  display: flex;
  /* width: 100%; */
  margin-left: 6.4rem;
  margin-top: 3rem;
  @media (max-width: 768px) {
    .react-datepicker {
      font-size: 2.5em;
    }
    .react-datepicker__day-name,
    .react-datepicker__day {
      width: 1.9em;
      line-height: 1.9em;
      margin: 0.166em;
    }
    .react-datepicker__current-month {
      font-size: 1em;
    }
  }
`;

const StartDate = styled.button`
  width: 23.2rem;
  height: 4.7rem;
  background-color: #f2f2f2;
  border-radius: 1rem;
  text-align: center;
  color: #848484;
  font-size: 1.2rem;
  outline: none;
  font-weight: 800;
  @media (max-width: 768px) {
    width: 42rem;
    height: 9rem;
    font-size: 3rem;
  }
`;
const EndDate = styled.button`
  width: 23.2rem;
  height: 4.7rem;
  margin-left: 2rem;
  background-color: #f2f2f2;
  border-radius: 1rem;
  text-align: center;
  color: #848484;
  outline: none;
  font-size: 1.2rem;
  font-weight: 800;
  @media (max-width: 768px) {
    width: 42rem;
    height: 9rem;
    font-size: 3rem;
  }
`;
