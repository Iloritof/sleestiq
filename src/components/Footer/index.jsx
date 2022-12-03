import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo-alt.svg';
import Object from '../../assets/object.png';

const Footer = () => {
  return (
    <footer
      aria-label='Footer'
      className='card tc-footer bg-blue-dark'
      style={{ '--bleed': '3.5rem 7rem' }}
    >
      <img className='bg-img' src={Object} alt='background design for footer' />

      <div
        className='flow'
        style={{ '--flow-space': '4.8rem', zIndex: '1', position: 'relative' }}
      >
        <div className='grid' style={{ placeItems: 'center' }}>
          <img
            src={Logo}
            alt='Sleepstiq, sleepstiq alternate logo, altenative brand icon for Sleeptiq'
          />
        </div>

        <div className='grid footer__lower' style={{ '--gap': '5rem' }}>
          <nav
            className='flow'
            style={{ '--flow-space': '1.4rem' }}
            aria-label='Additional links'
          >
            <p className='upper tc-white fw-600'>Company</p>
            <Link
              to='/about'
              className='d-block'
              style={{ '--flow-space': '2rem' }}
            >
              About
            </Link>
            <Link to='/blog' className='d-block'>
              Blog
            </Link>
            <Link to='#contact' className='d-block'>
              Contact
            </Link>
            <Link to='/shop' className='d-block'>
              Jobs
            </Link>
          </nav>

          <div className='flow' style={{ '--flow-space': '1.4rem' }}>
            <p className='upper tc-white fw-600'>CONTACT</p>
            <p className='tc-white fw-600' style={{ '--flow-space': '2rem' }}>
              Phone
            </p>
            <p>+234 708 507 3128</p>
            <p className='tc-white fw-600'>Address</p>
            <address>16, Ogindipe Close, Upston Close</address>
          </div>

          <div className='flow' style={{ '--flow-space': '2rem' }}>
            <p className='upper tc-white fw-600'>CONSUMER ADVISORY</p>
            <p>
              These statements have not been evaluated by the Food and Drug
              Administration. This product is not intended to diagnose, treat,
              cure, or prevent any disease. This product should be used only as
              directed on the label. All trademarks and copyrights are property
              of their respective owners and not affiliated with nor do they
              endorse this product. Results may vary.
            </p>
            <p>
              By using our website or product, you agree to follow our{' '}
              <Link>terms of service.</Link>
            </p>
          </div>

          <div className='flow' style={{ '--flow-space': '2.3rem' }}>
            <p className='upper tc-white fw-600'>Get in Touch</p>
            <p>Feel free to get in touch with us vai email</p>
            <p className='tc-white fs-700 fw-700'>hello@sleepstiq.com</p>
            <p>&copy; 2020@sleepstiq. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
