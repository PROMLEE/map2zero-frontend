import styled from 'styled-components';
import { CategoryItem } from '.';
export const Category = () => {
  const tags = ['주방용품', '위생용품', '욕실용품', '식료품', '필기용품', '악세사리', '기타'];

  return (
    <TagsWrap>
      {tags.map((item, index) => {
        return <CategoryItem tag={item} key={index} />;
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
