import React from 'react';
import './style.css';

import google from '../../assets/google-logo.jpg';
import forbes from '../../assets/forbes-logo.jpg';
import bloomberg from '../../assets/bloomberg-logo.jpg';
import influencive from '../../assets/influencive-logo.jpg';
import sleepReview from '../../assets/sleep-review-logo.jpg';

const ReviewBrand = () => (
  <section className='brand-section grid'>
    <div className='brand-section__content bg-white grid shadow'>
      <div>
        <img src={google} alt='logo of google' />
      </div>
      <div>
        <img src={forbes} alt='logo of forbes' />
      </div>
      <div>
        <img src={bloomberg} alt='logo of bloomberg' />
      </div>
      <div>
        <img src={influencive} alt='logo of influencive' />
      </div>
      <div>
        <img src={sleepReview} alt='logo of sleepReview' />
      </div>
    </div>
  </section>
);

export default ReviewBrand;
