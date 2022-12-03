import React from 'react';
import { useState } from 'react';
//components
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Shop from './pages/Shop';
import FAQs from './pages/FAQs';
//styles
import './App.css';
import { Route, Routes } from 'react-router';

const App = () => {
  const [reviews, setReviews] = useState([
    {
      id: 0,
      name: 'John Matthews',
      message:
        'Love it! I have trouble falling asleep and this knocked me right out. Will be buying more.',
      rating: 5,
    },
    {
      id: 1,
      name: 'John Matthews',
      message:
        'Love it! I have trouble falling asleep and this knocked me right out. Will be buying more.',
      rating: 5,
    },
    {
      id: 2,
      name: 'John Matthews',
      message:
        'Love it! I have trouble falling asleep and this knocked me right out. Will be buying more.',
      rating: 5,
    },
    {
      id: 3,
      name: 'John Matthews',
      message:
        'Love it! I have trouble falling asleep and this knocked me right out. Will be buying more.',
      rating: 5,
    },
    {
      id: 4,
      name: 'John Matthews',
      message:
        'Love it! I have trouble falling asleep and this knocked me right out. Will be buying more.',
      rating: 5,
    },
  ]);

  const [fadeActive, setFadeActive] = useState(false);

  window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      setFadeActive(true);
    }
    if (window.scrollY === 0) {
      setFadeActive(false);
    }
  });

  return (
    <>
      <Navbar isfade={fadeActive} />
      <Routes>
        <Route path='/' element={<Homepage reviews={reviews} />} />
        <Route path='/about' element={<About reviews={reviews} />} />
        <Route path='/shop' element={<Shop reviews={reviews} />} />
        <Route path='/faqs' element={<FAQs />} />
        {/* <Route path='/blog' element={<Blog />} /> */}
      </Routes>
    </>
  );
};

export default App;
