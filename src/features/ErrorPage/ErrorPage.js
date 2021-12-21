import React from 'react';
import { Link } from 'react-router-dom';

import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className='error-page-ctr'>
      <h1>404 Not Found</h1>
      <h2>Opps! Something went wrong here!</h2>
      <Link to='/home'>
        <button className='button'>Go to the main page</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
