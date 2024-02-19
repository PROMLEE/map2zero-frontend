import styled from 'styled-components';
import { eventDetailModal } from '../../recoil';
import { useSetRecoilState } from 'recoil';
import { EventId } from '../../recoil/StoreDetail/StoresState';
interface Props {
  title: string;
  start_date: string;
  end_date: string;
  photo: {
    url: string;
  };
  id: number;
}
export const Event = ({ title, start_date, end_date, photo, id }: Props) => {
  const setEventDetailModal = useSetRecoilState(eventDetailModal);
  const setid = useSetRecoilState(EventId);

  return (
    <Box
      onClick={() => {
        setEventDetailModal(true);
        setid(id);
      }}
    >
      <EventImg src={photo.url} />
      <EventInfo>
        <EventName>{title}</EventName>
        <EventDate>
          {start_date} ~ {end_date}
        </EventDate>
      </EventInfo>
    </Box>
  );
};

const Box = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  background-color: #d9d9d9;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 60rem;
  }
`;
const EventImg = styled.img`
  max-height: 20rem;
  object-fit: scale-down;
  @media (max-width: 768px) {
    max-height: 41.75rem;
  }
`;
const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  gap: 0.8rem;
  @media (max-width: 768px) {
    padding: 4rem;
    gap: 2rem;
  }
`;
const EventName = styled.div`
  height: 4rem;
  color: #000;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 3rem;
    font-weight: 600;
    height: 10rem;
  }
`;
const EventDate = styled.div`
  color: var(--dark-gray, #565656);
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 2.5rem;
    font-weight: 600;
  }
`;
