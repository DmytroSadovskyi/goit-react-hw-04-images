import React from 'react';
import { RotatingTriangles } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <div
      style={{
        width: '50px',
        margin: 'auto',
        display: 'block',
      }}
    >
      <RotatingTriangles color="#52bfd9" size={10} />
    </div>
  );
};

export default Spinner;
