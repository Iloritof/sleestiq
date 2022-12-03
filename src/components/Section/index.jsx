import React from 'react';
import GridContainer from '../../components/GridContainer';
import Button from '../../components/Button';
import Vape from '../../assets/vape-pen.png';
import Sleep from '../../assets/sleeping.jpg';
import './style.css';

const Section = ({ style, title, heading, showBtn, children }) => {
  let design = false;
  if (style === 'left') design = false;
  if (style === 'right') design = true;

  return (
    <section className={title} aria-label={heading}>
      {design ? (
        <GridContainer style='--2'>
          <div
            className='flow card'
            style={{ '--flow-space': '3rem', maxWidth: 'max(80%, 42rem)' }}
          >
            <h2 className='fs-800 fw-700 '> {heading}</h2>
            {children}
            {showBtn && <Button text='Visit Shop' />}
          </div>
          <div
            className='span halign'
            style={{
              '--halign': 'center',
              '--grid-span': '3 / 5',
              width: '100%',
            }}
          >
            <img src={Sleep} alt='' style={{ width: '100%' }} />
          </div>
        </GridContainer>
      ) : (
        <GridContainer style='--2'>
          <div
            className='span halign'
            style={{
              '--halign': 'center',
              '--grid-span': '1 / 3',
              position: 'relative',
            }}
          >
            <img src={Vape} alt='' style={{ width: '100%' }} />
            <p className='img-text card bg-white tc-amber italic shadow'>
              😊 Promotes calm and relaxation. <br />
              💤 Inhalation allows for a rapid effect.
              <br />✅ 100% drug-free, plant-based ingredients.
              <br /> ‍⚕️ 3rd-party lab tested.
            </p>
          </div>
          <div
            className='flow card'
            style={{ '--flow-space': '3rem', maxWidth: 'max(80%, 42rem)' }}
          >
            <h2 className='fs-800 fw-700 '> {heading}</h2>
            {children}
            {showBtn && <Button text='Visit Shop' />}
          </div>
        </GridContainer>
      )}
    </section>
  );
};

export default Section;
