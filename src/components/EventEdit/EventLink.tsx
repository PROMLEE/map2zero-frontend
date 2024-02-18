import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { EventEditState } from '../../recoil';

export const EventLink = () => {
  const [eventval, setEventval] = useRecoilState(EventEditState);

  const onInputHandler = (e: any) => {
    setEventval({ ...eventval, apply_url: e.target.value });
  };

  return (
    <Namebox>
      <TextBox placeholder="이벤트 페이지 접속 링크" onChange={onInputHandler} />
    </Namebox>
  );
};

const Namebox = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: flex-start;
`;
const TextBox = styled.input`
  width: 90%;
  padding-bottom: 1rem;
  margin-top: 1.4rem;
  margin-left: 6.4rem;
  border-bottom: 0.5px solid #e0e0e0;
  font-size: 1rem;
  outline: none;
  &::placeholder {
    color: #e0e0e0;
    font-weight: 400;
  }
  @media (max-width: 768px) {
    font-size: 2.5rem;
    padding-bottom: 2.5rem;
    margin-top: 3.5rem;
  }
`;
