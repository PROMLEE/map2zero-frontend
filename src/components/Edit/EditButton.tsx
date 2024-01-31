import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { nickNameState } from '../../recoil';

const EditButton = () => {
  const [nickname, setNickName] = useRecoilState(nickNameState);

  //닉네임 중복 체크 및 편집 불가능하게 적용
  const onButtonHandler = () => {
    if (nickname.nickname === '중복') {
      setNickName((prevState) => ({
        ...prevState,
        message: true,
      }));
    }
    setNickName((prevState) => ({
      ...prevState,
      readonly: true,
    }));
  };

  return (
    <Button disabled={nickname.nickname === ''} onClick={onButtonHandler}>
      적용
    </Button>
  );
};

export default EditButton;

const Button = styled.button`
  display: flex;
  width: 29.2rem;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  font-family: 'Noto Sans';
  font-size: 12px;
  font-weight: 600;
  background: #0b5c71;
  color: #fff;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 81.75rem;
    margin-bottom: 7.75rem;
  }

  &:disabled {
    background: #f2f2f2;
    color: #e0e0e0;
    cursor: auto;
  }
`;
