import React from 'react';
import { useState } from 'react';
import './style.css';
import Header from '../../components/Header';
import Hero from '../../assets/shop.jpg';
import Section from '../../components/Section';
import Reviews from '../../components/Reviews';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Divider from '../../components/Divider';

const Shop = ({ reviews }) => {
  const [amount, setAmount] = useState(0);

  return (
    <main style={{ maxWidth: '100em', marginInline: 'auto' }}>
      <Header hero={Hero}>
        <h1 className='fs-500 flow'>
          <span> We're here to help you</span>
          <span className='d-block fs-900 fw-700'>Relax & Rest</span>
        </h1>
      </Header>

      <Section title='about-product' heading='About Product'>
        <p>
          Our Personal Diffuser is an aromatherapy device that contains a blend
          of melatonin, lavender, and chamomile. A few breaths of our
          plant-based essential oil mist will mellow you out, quiet the mind,
          and lull you to bed.
        </p>
        <p>
          😊 Promotes calm and relaxation.
          <br />
          💤 Inhalation allows for a rapid effect.
          <br />
          ✅ 100% drug-free, plant-based ingredients.
          <br />
          ‍⚕️ 3rd-party lab tested.
        </p>

        <div className='flex' style={{ '--gap': '5rem' }}>
          <div>
            <p>Price</p>
            <p className='fw-700'>USD {amount * 25}</p>
          </div>
          <div>
            <p>Unit</p>
            <input
              type='number'
              name=''
              id=''
              value={amount}
              onChange={(event) => setAmount(event.currentTarget.value)}
              style={{ maxWidth: '8rem' }}
              defaultValue='0'
            />
          </div>
        </div>

        <Button text='Buy' />
      </Section>

      <Divider />

      <Reviews reviews={reviews} />

      <Footer />
    </main>
  );
};

export default Shop;
