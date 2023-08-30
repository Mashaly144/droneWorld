import React from 'react';
import article1 from '../assets/articles-1.png';
import article2 from '../assets/articles-2.png';
import article3 from '../assets/articles-3.png';
const Articles = () => {
  return (
    <div className='py-[100px]'>
      <div className='container mx-auto'>
        <div>
          <div className='space-y-9'>
            <h1 className='text-2xl '>Our Article</h1>
            <h1 className='text-5xl w-[100%] lg:w-[50%]'>
              Get to know about our latest projects and products
            </h1>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur
            </p>
          </div>
          <div className='flex-between items-center flex-col lg:flex-row flex-wrap mt-[50px] gap-8'>
            <article className='w-[350px] flex flex-col gap-5 p-5 bg-[#F5F5F5] rounded-[20px]'>
              <img className='max-w-full' src={article1} alt='article' />
              <h5 className='font-semibold'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse ?
              </h5>
              <p>
                The passage is attributed to an unknown typesetter in the 15th
                century who is thought to have scrambled parts of
              </p>
              <span className='font-semibold text-sm'>By Maddie Clarke</span>
            </article>
            <article className='w-[350px] flex flex-col gap-5 p-5 bg-[#F5F5F5] rounded-[20px]'>
              <img className='max-w-full' src={article2} alt='article' />
              <h5 className='font-semibold'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse ?
              </h5>
              <p>
                The passage is attributed to an unknown typesetter in the 15th
                century who is thought to have scrambled parts of
              </p>
              <span className='font-semibold text-sm'>By Maddie Clarke</span>
            </article>
            <article className='w-[350px] flex flex-col gap-5 p-5 bg-[#F5F5F5] rounded-[20px]'>
              <img className='max-w-full' src={article3} alt='article' />
              <h5 className='font-semibold'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse ?
              </h5>
              <p>
                The passage is attributed to an unknown typesetter in the 15th
                century who is thought to have scrambled parts of
              </p>
              <span className='font-semibold text-sm'>By Maddie Clarke</span>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
