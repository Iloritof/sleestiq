import React from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

const FAQs = () => {
  return (
    <main>
      <Header>
        <h1 className='fs-500 flow'>
          <span> We're here to help you</span>
          <span className='d-block fs-900 fw-700'>Relax & Rest</span>
        </h1>

        <p>
          With the aid of our Melatonin Sleepstiq, we can assure you that you
          can get quality sleep.
        </p>

        <Button text='Visit Shop'></Button>
      </Header>

      <Footer />
    </main>
  );
};

export default FAQs;
