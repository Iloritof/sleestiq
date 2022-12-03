import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Button = ({ url, text }) => {
  return (
    <NavLink to={url} className='btn fs-300 bg-red tc-white'>
      {text}
    </NavLink>
  );
};

export default Button;
