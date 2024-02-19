import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { ProductAdd } from '../../recoil/Products/Products';

interface Props {
  name: string;
  id: number;
}
export const CategoryItem = ({ name, id }: Props) => {
  const [values, setValues] = useRecoilState(ProductAdd);
  const [tagon, settagon] = useState<boolean>(false);

  useEffect(() => {
    values.tag_id === id ? settagon(true) : settagon(false);
  }, [values]);

  const onpress = () => {
    setValues({ ...values, tag_id: id });
  };

  return (
    <TagItem $istagon={tagon} onClick={onpress}>
      {name}
    </TagItem>
  );
};

const TagItem = styled.div<{ $istagon: boolean }>`
  padding: 1rem 2rem;
  height: 5.5rem;
  border-radius: 4rem;
  border: 1px solid #74b69d;
  background-color: ${(props) => (props.$istagon ? '#74b69d' : '#FFF')};
  color: ${(props) => (props.$istagon ? '#FFF' : '#74b69d')};
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 2.5rem;
  font-weight: 400;
  @media (min-width: 768px) {
    // min-width 이유: hover event 적용시 모바일에서 문제 발생함.
    height: 2.2rem;
    font-size: 1rem;
    padding: 0.4rem 0.8rem;
    border-radius: 1.6rem;
    &:hover {
      cursor: pointer;
      background-color: #74b69d;
      color: white;
    }
  }
`;
