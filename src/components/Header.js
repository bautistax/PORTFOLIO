import React from 'react';
import { Link } from 'react-scroll';
const Header = () => {
  return (
    <header className='py-5 lg:py-8'>
      <div className="container mx-auto mb-20 flex flex-col items-center lg:flex-row lg:justify-end">
        <Link to='about'>
          <button className='btn btn-sm lg:btn-md mb-4 lg:mb-0 lg:mr-4'>About</button>
        </Link>
        <Link to='proyects'>
          <button className='btn btn-sm lg:btn-md mb-4 lg:mb-0'>Projects</button>
        </Link>
        <Link to='contact'>
          <button className='btn btn-sm lg:btn-md lg:ml-4'>Work with Me</button>
        </Link>
      </div>
    </header>
  );
};


export default Header;
