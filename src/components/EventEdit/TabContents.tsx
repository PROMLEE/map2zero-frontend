import styled from 'styled-components';
import { Product } from '.';
import { Events } from '../../apis/Event/Event';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
interface Props {
  status: string;
}
export const TabContents = ({ status }: Props) => {
  const [items, setitems] = useState<any[]>([]);
  const params = useParams();
  useEffect(() => {
    if (params.storeid) {
      Events(Number(params.storeid), status).then((res) => {
        setitems(res);
      });
    }
  }, [params.storeid]);

  return (
    <List>
      {items.length > 0 &&
        items.map((item, index) => {
          return <Product {...item} key={index} />;
        })}
    </List>
  );
};

const List = styled.div`
  display: flex;
  overflow: visible;
  flex-wrap: wrap;
  width: 92.4rem;
  gap: 2.4rem;
  padding-bottom: 10rem;
  @media (max-width: 768px) {
    width: 100%;
    gap: 2%;
  }
`;
