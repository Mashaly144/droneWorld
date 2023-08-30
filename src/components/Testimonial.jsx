import React from 'react';
import { users } from '../constant/data';
import Card from './Card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Number of visible slides at a time
    slidesToScroll: 1, // Number of slides to scroll per change
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className='py-[100px]'>
      <div className='container mx-auto'>
        <div>
          <h1 className='text-2xl mb-9'>Testimonial</h1>
          <h1 className='text-5xl w-[100%] lg:w-[50%]'>
            Some Words From our Valued Customers
          </h1>
        </div>
        <Slider className='mt-[50px]' {...settings}>
          {users.map((user) => {
            return (
              <div key={user.id}>
                <Card user={user} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
