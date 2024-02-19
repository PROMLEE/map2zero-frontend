import { useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { ReviewWriteState } from '../../recoil/StoreDetail/StoresState';
import { StoreReviewWrite } from '../../recoil/StoreDetail/types';

export const StarRating = ({ totalStars = 5 }) => {
  const [hover, setHover] = useState(0);
  const [reviewState, setreviewState] = useRecoilState<StoreReviewWrite>(ReviewWriteState);

  return (
    <Starbox>
      {[...Array(totalStars)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => {
                setreviewState({ ...reviewState, score: ratingValue });
              }}
              style={{ display: 'none' }}
            />
            <Starimg
              src={
                ratingValue <= (hover || reviewState.score)
                  ? `${process.env.PUBLIC_URL}/assets/StoreDetail/star_full.svg`
                  : `${process.env.PUBLIC_URL}/assets/StoreDetail/star_empty.svg`
              }
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(reviewState.score)}
              style={{ cursor: 'pointer' }}
              alt={`Star ${ratingValue}`}
            />
          </label>
        );
      })}
    </Starbox>
  );
};

const Starbox = styled.div`
  position: relative;
  margin-top: 1.4rem;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    margin-top: 3.5rem;
  }
`;
const Starimg = styled.img`
  width: 4rem;
  height: 4rem;
  @media (max-width: 768px) {
    width: 10rem;
    height: 10rem;
  }
`;
