import React from 'react';

const Button = ({ value, onClick, className }) => (
  <button type="button" value={value} onClick={onClick} className={className}>
    {value}
  </button>
);

export default Button;
