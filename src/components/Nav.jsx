import React from 'react';
import { Link } from 'react-router-dom';
import { PiHandbagThin } from 'react-icons/pi';
import { AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/logo.svg';

const Nav = () => {
  return (
    <nav className='py-[30px] container mx-auto'>
      <div className='flex-between'>
        <div className='flex-between gap-4'>
          <img
            className='hover:rotate-90 transition-transform'
            src={logo}
            alt='logo'
          />
          <Link className='font-semibold font-Poppins' to='/'>
            FLIGHT 360
          </Link>
        </div>
        <ul className='hidden  lg:flex justify-between items-center gap-[3rem] nav__links'>
          <li className='p-2 cursor-pointer  nav__link'>Shop</li>
          <li className='p-2 cursor-pointer nav__link'>About</li>
          <li className='p-2 cursor-pointer nav__link'>Explore</li>
        </ul>
        <div className='flex-between gap-6'>
          <button>Login</button>
          <PiHandbagThin className='cursor-pointer text-2xl ' />
          <AiOutlineMenu className='cursor-pointer text-2xl' />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
