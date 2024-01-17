import styled from 'styled-components';
import Tagitem from './Tagitem';
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
  margin-top: 3.5rem;
  margin-left: 6rem;
  display: flex;
  width: 81.75rem;
  gap: 2rem 1rem;
  flex-wrap: wrap;
  @media (max-width: 768px) {
  }
`;
