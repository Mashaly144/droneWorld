import React from 'react';
import { PiHandbagThin } from 'react-icons/pi';
import { BsPlayCircle } from 'react-icons/bs';
import drone1 from '../assets/drone-1.png';
import Button from '../ui/Button';
const Hero = () => {
  return (
    <div className='py-[100px] flex justify-center items-center'>
      <div className='container mx-auto'>
        <h1 className='text-center font-semibold text-5xl py-8 lg:text-[70px]  capitalize'>
          Get your hands on the most{' '}
          <span className='heroHeader text-white'>advanced</span> drones
        </h1>
        <div className='flex-between flex-col lg:flex-row py-10 space-y-[6rem] lg:space-y-0'>
          <div className='flex-1'>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione Ut
              enim ad minima veniam, quis nostrum exercitationem ullam corporis
              suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
              Quis autem.
            </p>
            <div className='flex-start gap-4 pt-10'>
              <Button>
                <PiHandbagThin className='text-2xl mr-2' />
                Add to cart
              </Button>
              <button className='flex-center'>
                <BsPlayCircle className='text-3xl mr-2 hover:rotate-90 transition-transform' />
                View Video
              </button>
            </div>
          </div>
          <div className='flex-1 md:flex-2 lg:flex-2'>
            <img src={drone1} alt='drone1' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
