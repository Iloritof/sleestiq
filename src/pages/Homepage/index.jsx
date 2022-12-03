import React from 'react';
import './style.css';
import Hero from '../../assets/hero.jpg';
import GridContainer from '../../components/GridContainer';
import Button from '../../components/Button';
import Header from '../../components/Header';
import ReviewBrand from '../../components/ReviewBrand';
import James from '../../assets/james-miller.jpg';
import Reviews from '../../components/Reviews';
import Section from '../../components/Section';
import Footer from '../../components/Footer';
import Divider from '../../components/Divider';
import Visit from '../../components/Visit';

const Homepage = ({ reviews }) => {
  return (
    <main style={{ maxWidth: '100em', marginInline: 'auto' }}>
      <Header isLarge='true' hero={Hero}>
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
      <ReviewBrand />

      <section className='section--about'>
        <GridContainer style='--2'>
          <div
            className='flow card'
            style={{
              '--flow-space': '2.9rem',
              '--bleed': '2rem',
              maxWidth: '47.5rem',
            }}
          >
            <h2 className='fs-300 fw-400'>Our Amazing Story</h2>
            <p className='fs-800 fw-700'>10k+Happy Customers</p>
            <p style={{ '--flow-space': '5.6rem' }}>
              There’s no secret sauce, no wizard behind the curtain. What makes
              Aerolab tick is an interdisciplinary team with a framework that
              fosters candid collaboration.
            </p>

            <a href='' className='d-block'>
              More know About us
            </a>
          </div>

          <div
            className='card tc-amber shadow--1 bg-light'
            style={{ maxWidth: '47.5rem', '--bleed': '5.5rem 4rem 3rem' }}
          >
            <div className='flow' style={{ '--flow-space': '8rem' }}>
              <p className='fs-700 italic'>
                I’m a very anxious person but use this and feel so relaxed and
                sleep way better now with the aid of sleepstiq.
              </p>

              <div
                className='flex'
                style={{ '--gap': '3.5rem', alignItems: 'center' }}
              >
                <img src={James} alt='' />

                <div>
                  <h3>James Miller</h3>
                  <p>CEO, Techbias</p>
                </div>
              </div>
            </div>
          </div>
        </GridContainer>
      </section>

      <Reviews reviews={reviews} />

      <Divider />

      <Section title='section--shop-now' heading='Shop Now' showBtn={true}>
        <p>
          Our Personal Diffuser is an aromatherapy device that contains a blend
          of melatonin, lavender, and chamomile. A few breaths of our
          plant-based essential oil mist will mellow you out, quiet the mind,
          and lull you to bed.
        </p>
      </Section>

      <Section
        title='section--mission'
        heading='Our Mission'
        style='right'
        showBtn={false}
      >
        <p>
          We started Sleepstiq with 1 simple goal: to be your best friend at
          bedtime. We, just like you, deal with stress, unease, and trouble
          sleeping from a number of silly things like school, work, screens,
          numbers, and people. That's why we created products that aim to -
        </p>
        <p>
          ✓ Promote Calm <br />✓ Support Sleep <br />✓ Reduce Stress <br />✓ Aid
          Relaxation
        </p>
      </Section>

      <Visit />

      <Divider />

      <Footer />
    </main>
  );
};

export default Homepage;
