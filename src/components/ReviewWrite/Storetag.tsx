import styled from 'styled-components';
import { GetReviewTag } from '../../recoil';
import { Tagitem } from '.';
import { useRecoilValue } from 'recoil';

export const Storetag = () => {
  const tags = useRecoilValue(GetReviewTag);
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
