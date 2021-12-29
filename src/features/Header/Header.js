import React from 'react';
import { FaReddit, FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Header.css';

import { selectSelectedSubreddit } from '../SubredditPosts/subredditPostsSlice';

const Header = () => {
  const selectedSubreddit = useSelector(selectSelectedSubreddit);
  const navigate = useNavigate();

  return (
    <header className='header-ctr'>
      <Link to={selectedSubreddit}>
        <button
          className='logo-ctr'
          onClick={() => navigate(selectedSubreddit)}>
          <FaReddit className='main-logo' />
          <h1 className='logo-text'>
            <span>reddit</span>Mini
          </h1>
        </button>
      </Link>
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
