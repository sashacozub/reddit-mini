import React from 'react';
import { FaReddit, FaSearch } from 'react-icons/fa';

import './Header.css';

const Header = () => {
  return (
    <header className='header-ctr'>
      <div className='logo-ctr'>
        <FaReddit className='main-logo' />
        <h1 className='logo-text'>
          <span>reddit</span>Mini
        </h1>
      </div>
      <form className='search-form'>
        <input type='text' className='search-box' placeholder='Search reddit' />
        <button type='submit' className='search-btn'>
          <FaSearch className='search-btn-icon' />
        </button>
      </form>
    </header>
  );
};

export default Header;
