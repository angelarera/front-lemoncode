import React from 'react';
import { Review } from '../house.vm';
import classes from './review-item.module.css';

interface Props {
  review: Review;
}

export const ReviewItem: React.FC<Props> = (props) => {
  const { review } = props;

  return (
    <div className={classes.reviewItem}>
      <div className={classes.reviewHeader}>
        <div className={classes.reviewAuthor}>{review.author}</div>
        <div className={classes.reviewRating}>
          <span className={classes.ratingNumber}>
            {review.rating.toFixed(1)}
          </span>
          {'⭐'.repeat(review.rating)}
        </div>
      </div>
      <div className={classes.reviewDate}>{review.date}</div>
      <p className={classes.reviewComment}>{review.comment}</p>
    </div>
  );
};
