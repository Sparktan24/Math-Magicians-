import React from 'react';

const Button = ({ value, onClick, className }) => {
  return (
    <button type="button" value={value} onClick={onClick} className={className}>
      {value}
    </button>
  );
};

export default Button;
