import React from 'react';

import './Header.css';

import { FaReddit, FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className='header-ctr'>
      <div className='logo-ctr'>
        <FaReddit className='main-logo' />
        <h1 className='logo-text'>
          reddit<span>Minimal</span>
        </h1>
      </div>
      <form className='search-form'>
        <input type='text' className='search-box' placeholder='Search...' />
        <button type='submit' className='search-btn'>
          <FaSearch className='search-btn-icon' />
        </button>
      </form>
    </header>
  );
};

export default Header;
