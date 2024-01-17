import styled from 'styled-components';
import { Tagitem } from '../StoreDetail';
export const Storetag = () => {
  const tags = ['#태그1태그1태그1', '#태그2', '#태그3태그3', '#태그4', '#태그5', '#태그6태그6태그6ㄴㄴㄴ'];

  return (
    <TagsWrap>
      {tags.map((item, index) => {
        return <Tagitem tag={item} key={index} />;
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
