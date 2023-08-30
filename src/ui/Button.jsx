import React from 'react';

const Button = ({ children }) => {
  return (
    <button className='flex-start bg-[#3B3B3B] text-white rounded-md py-3 px-4'>
      {children}
    </button>
  );
};

export default Button;
