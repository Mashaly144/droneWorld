import React from 'react';
import Button from '../ui/Button';

const Subscribe = () => {
  return (
    <div className='py-[100px]'>
      <div className='container mx-auto flex-between text-center gap-12 flex-col'>
        <h1 className='text-6xl font-light '>
          Get our <span className='font-semibold'>Newsletter</span>
        </h1>
        <form action='' className='flex-start flex-col lg:flex-row gap-5'>
          <input
            type='email'
            placeholder='Enter your email address here'
            name='email'
            className='subInput'
          />
          <Button>Subscribe</Button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
