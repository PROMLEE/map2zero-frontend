import { useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { tagitem } from '../../recoil';

interface Props {
  tag: string;
}
export default function Tagitem(props: Props) {
  const [tags, setModal] = useRecoilState(tagitem);
  const [tagon, settagon] = useState<boolean>(false);

  const onpress = () => {
    let onpresstags: string[] = [...tags];
    if (tagon) {
      onpresstags = onpresstags.filter((item) => item !== props.tag);
    } else {
      onpresstags.push(props.tag);
    }
    setModal(onpresstags);
    settagon(!tagon);
    console.log(tagon, tags);
  };
  return (
    <TagItem $istagon={tagon} onClick={onpress}>
      {props.tag}
    </TagItem>
  );
}

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
    &:hover {
      cursor: pointer;
      background-color: #74b69d;
      color: white;
    }
  }
`;
