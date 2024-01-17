import React, { useState } from 'react';
import styled from 'styled-components';

interface StarRatingProps {
  totalStars?: number;
}

export const TextReview: React.FC<StarRatingProps> = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

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
              onClick={() => setRating(ratingValue)}
              style={{ display: 'none' }}
            />
            <img
              src={
                ratingValue <= (hover || rating)
                  ? `${process.env.PUBLIC_URL}/assets/StoreDetail/star_full.png`
                  : `${process.env.PUBLIC_URL}/assets/StoreDetail/star_empty.png`
              }
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(rating)}
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
  margin-top: 3.5rem;
  margin-left: auto;
  margin-right: auto;
`;
