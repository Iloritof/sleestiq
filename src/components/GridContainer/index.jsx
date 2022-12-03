import React from 'react';
import './style.css';

const GridContainer = ({ style, children }) => {
  const layout = style ? style : null;
  return (
    <div className={`grid-container grid-container${layout}`}>{children}</div>
  );
};

export default GridContainer;
