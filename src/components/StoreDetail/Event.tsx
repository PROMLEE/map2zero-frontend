import styled from 'styled-components';

interface Props {
  event: string;
  start: string;
  end: string;
  url: string;
  code: number;
}
export const Event = ({ event, start, end, url, code }: Props) => {
  return (
    <Box>
      <EventImg src={url} />
      <EventInfo>
        <EventName>{event}</EventName>
        <EventDate>
          {start} ~ {end}
        </EventDate>
      </EventInfo>
    </Box>
  );
};

const Box = styled.div`
  width: 24rem;
  height: 24rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  background-color: #d9d9d9;
`;
const EventImg = styled.img`
  height: 16.7rem;
  width: 24rem;
`;
const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  gap: 0.8rem;
`;
const EventName = styled.div`
  color: #000;
  font-family: 'Noto Sans KR';
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const EventDate = styled.div`
  color: var(--dark-gray, #565656);
  font-family: 'Noto Sans KR';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
