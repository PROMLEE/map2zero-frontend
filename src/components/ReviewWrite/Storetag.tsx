import styled from 'styled-components';
import GetTags from '../../apis/StoreDetail/GetTags';
import { StoreTagtype } from '../../recoil/StoreDetail/types';
import { Tagitem } from '.';
import { useEffect, useState } from 'react';

export const Storetag = () => {
  const [tags, settags] = useState<StoreTagtype[]>([]);

  const getdata = async () => {
    const data = await GetTags('REVIEW');
    settags(data.data);
  };

  useEffect(() => {
    getdata();
  }, []);
  return (
    <TagsWrap>
      {tags.map((item, index) => {
        return <Tagitem {...item} key={index} />;
      })}
    </TagsWrap>
  );
};

const TagsWrap = styled.div`
  display: flex;
  margin-top: 1.4rem;
  margin-left: auto;
  margin-right: auto;
  width: 48.4rem;
  gap: 0.8rem 0.4rem;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    gap: 2rem 1rem;
    width: 90%;
    margin-top: 3.5rem;
  }
`;
