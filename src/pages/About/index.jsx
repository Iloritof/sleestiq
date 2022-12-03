import React from 'react';
import './style.css';
import Header from '../../components/Header';
import Hero from '../../assets/about.jpg';
import Section from '../../components/Section';
import Reviews from '../../components/Reviews';
import Footer from '../../components/Footer';
import Visit from '../../components/Visit';

const About = ({ reviews }) => {
  return (
    <main style={{ maxWidth: '100em', marginInline: 'auto' }}>
      <Header centerText='center' hero={Hero}>
        <h1 className='fs-500 flow'>
          <span> We're here to help you</span>
          <span className='d-block fs-900 fw-700'>Relax & Rest</span>
        </h1>
      </Header>

      <Section style='right' title='about__us' heading='About Us'>
        <p>
          When concentrated melatonin is inhaled, in theory, it is instantly
          absorbed by alveoli in the lungs and enters the bloodstream, instead
          of being metabolized by the liver, as would a tablet. Only a small
          amount of melatonin, then, is required to create a physiological
          effect.
        </p>
        <p>
          In October 2020, Sleepstiq was birthed to bring a lasting solution to
          the sleeping problem of humans. Once inhaled, melatonin enters the
          bloodstream and immediately begins to “mellow you out” before leaving
          you “sleeping on a cloud.”
        </p>
      </Section>

      <Section title='about__product' heading='About Product' showBtn={true}>
        <p>
          Our Personal Diffuser is an aromatherapy device that contains a blend
          of melatonin, lavender, and chamomile. A few breaths of our
          plant-based essential oil mist will mellow you out, quiet the mind,
          and lull you to bed.
        </p>
      </Section>

      <Reviews reviews={reviews} />

      <Visit />

      <Footer />
    </main>
  );
};

export default About;
