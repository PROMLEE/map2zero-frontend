import styled from 'styled-components';
import { Product, ProductManage } from '.';
import { Products, ProductsM } from '../../apis/SellingProduct/Products';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
interface Props {
  tagid: any;
}
export const TabContents = ({ tagid }: Props) => {
  const Location = useLocation().pathname.slice(1, 21) !== 'sellingproductmanage';
  const [items, setitems] = useState<any[]>([]);
  const params = useParams();
  useEffect(() => {
    if (params.storeid) {
      if (Location) {
        Products(Number(params.storeid), tagid, null).then((res) => {
          setitems(res);
        });
      } else {
        ProductsM(Number(params.storeid), tagid, null).then((res) => {
          setitems(res);
        });
      }
    }
  }, [params.storeid]);

  return (
    <List>
      {items.length > 0 &&
        items.map((item, index) => {
          return Location ? <Product {...item} key={index} /> : <ProductManage {...item} key={index} />;
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
