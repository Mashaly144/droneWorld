import React from 'react';
import Button from '../ui/Button';
import drone1 from '../assets/drone-2.png';
import drone2 from '../assets/4k-427 1.png';
const About = () => {
  return (
    <div>
      <div className='container mx-auto'>
        <div className='flex-between flex-col'>
          <div className='flex-between flex-col lg:flex-row gap-10 py-[50px]'>
            <div className='flex-1'>
              <img src={drone1} alt='drone1' className='' />
            </div>
            <div className='flex-1 space-y-5'>
              <h1 className='text-5xl w-[80%]'>
                A drone without a camera is like a body without a soul.
              </h1>
              <p className='w-[400px]'>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                Ut enim ad minima veniam.
              </p>
              <Button>Buy Now</Button>
            </div>
          </div>
          <div className='flex-between flex-col lg:flex-row gap-10 py-[50px]'>
            <div className='flex-1 space-y-5 order-2 lg:order-1'>
              <h1 className='text-5xl w-[80%]'>
                The world is a better place with drones.
              </h1>
              <p className='w-[400px]'>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                Ut enim ad minima veniam.
              </p>
              <Button>Buy Now</Button>
            </div>
            <div className='flex-1 order-1 lg:order-2'>
              <img src={drone2} alt='drone1' className='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
