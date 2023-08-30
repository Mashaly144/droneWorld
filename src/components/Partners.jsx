import React from 'react';
import partner1 from '../assets/partner-1.svg';
import partner2 from '../assets/partner-2.svg';
import partner3 from '../assets/partner-3.svg';
import partner4 from '../assets/partner-4.svg';
const Partners = () => {
  return (
    <div className='py-12 bg-[#F5F5F5]'>
      <div className='container mx-auto'>
        <div className='flex-between flex-col lg:flex-row gap-8'>
          <img src={partner1} alt='partner' />
          <img src={partner2} alt='partner' />
          <img src={partner3} alt='partner' />
          <img src={partner4} alt='partner' />
        </div>
      </div>
    </div>
  );
};

export default Partners;
