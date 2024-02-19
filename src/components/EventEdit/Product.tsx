import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { eventDetailModal } from '../../recoil';
import { EventId } from '../../recoil/StoreDetail/StoresState';

interface Props {
  id: number;
  title: string;
  start_date: string;
  end_date: string;
  photo: { url: string };
}
export const Product = ({ id, title, start_date, end_date, photo }: Props) => {
  const setEventDetailModal = useSetRecoilState(eventDetailModal);
  const setid = useSetRecoilState(EventId);
  return (
    <Box
      onClick={() => {
        setEventDetailModal(true);
        setid(id);
      }}
    >
      <ProductImg src={photo.url} alt={photo.url} />
      <ProductName>{title}</ProductName>
      <Bottombox>
        <ProductPrice>{start_date}</ProductPrice>
        <img src={`${process.env.PUBLIC_URL}/assets/Eventmanage/doublearrow.svg`} />
      </Bottombox>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 21.2rem;
  /* height: 26.7rem; */
  align-items: flex-start;
  border-radius: 0.8rem;
  background-color: #d9d9d9;
  border: 0.5px solid #f2f2f2;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    margin-bottom: 4rem;
    width: 49%;
    /* height: 51.5rem; */
  }
`;
const ProductImg = styled.img`
  /* width: 21.2rem; */
  max-height: 21.2rem;
  border-radius: 0.8rem 0.8rem 0 0;
  margin: 0 auto;
  @media (max-width: 768px) {
    /* width: 100%; */
    max-height: 37.75rem;
  }
`;

const ProductName = styled.div`
  padding-left: 0.8rem;
  padding-top: 0.8rem;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media (max-width: 768px) {
    padding-left: 2rem;
    padding-top: 2rem;
    font-size: 3rem;
  }
`;
const Bottombox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem;
  width: 100%;
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;
const ProductPrice = styled.div`
  /* height: 1.2rem; */
  align-self: stretch;
  color: #000;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;
