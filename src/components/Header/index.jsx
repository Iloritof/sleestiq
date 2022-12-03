import React from 'react';
import Hero from '../../assets/hero.jpg';
import './style.css';

const Header = ({ isLarge, centerText, hero, children }) => {
  const aspect = isLarge ? 'large' : '';
  const textAlign = centerText ? 'center' : '';

  return (
    <header className={`grid bg-light ${aspect} ${textAlign}`}>
      {hero && (
        <img className={`hero-img`} src={hero} alt='a lady laying in bed' />
      )}

      <div
        className={`header__text d-inline-block flow ${centerText && 'fix'}`}
      >
        {children}
      </div>
    </header>
  );
};

export default Header;
