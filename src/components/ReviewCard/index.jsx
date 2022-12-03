import React from 'react';
import './style.css';

const ReviewCard = ({ name, message, rating }) => {
  return (
    <section
      className='review-card tc-amber flow card bg-light'
      style={{
        '--flow-space': '2.4rem',
      }}
    >
      <p>{message}</p>

      <div className='flow' style={{ '--flow-space': '0.9rem' }}>
        <h4 className='fw-700'>{name}</h4>
        <div>{rating}</div>
      </div>
    </section>
  );
};

export default ReviewCard;
