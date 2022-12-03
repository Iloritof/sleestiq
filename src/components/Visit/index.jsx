import React from 'react';
import GridContainer from '../../components/GridContainer';
import Button from '../../components/Button';

const Visit = () => (
  <section className='section--visit' aria-label='Visit Our Shop'>
    <GridContainer style='--1'>
      <div
        className='flow'
        style={{ '--flow-space': '2.5rem', textAlign: 'center' }}
      >
        <h2 className='fs-800'>Visit Our Shop</h2>
        <p className='container' style={{ '--max-width': '91.5rem' }}>
          Our Personal Diffuser is an aromatherapy device that contains a blend
          of melatonin, lavender, and chamomile. A few breaths of our
          plant-based essential oil mist will mellow you out, quiet the mind,
          and lull you to bed.
        </p>
        <Button text='Visit Shop' />
      </div>
    </GridContainer>
  </section>
);

export default Visit;
