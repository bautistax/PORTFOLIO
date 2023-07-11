import React from 'react';
import { Link } from 'react-scroll';
const Header = () => {
  return (
    <header className='py-8'>
      <div className="container mx-auto flex justify-end">
          <Link to='contact'>
            <button className='btn btn-sm'>Work with Me</button>
          </Link>
      </div>
    </header>
    ) 
};

export default Header;
