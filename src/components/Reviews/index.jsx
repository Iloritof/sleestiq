import React from 'react';
import GridContainer from '../GridContainer';
import ReviewCard from '../ReviewCard';

const Reviews = ({ reviews }) => {
  return (
    <section className='section--reviews'>
      <GridContainer style='--1'>
        <div
          className='span card'
          style={{
            '--grid-span': '2 / 4',
            overflowX: 'scroll',
          }}
        >
          <div className='flex' style={{ '--gap': '2.6rem' }}>
            {reviews.map((review) => {
              return (
                <ReviewCard
                  name={review.name}
                  message={review.message}
                  key={review.id}
                  rating={review.rating}
                />
              );
            })}
          </div>
        </div>
      </GridContainer>
    </section>
  );
};

export default Reviews;
