import React from 'react';
import { Link } from 'react-router-dom';

import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className='error-page-ctr regular-box'>
      <h1>Opps! Something went wrong here!</h1>
      <h2>404 Not Found</h2>
      <br />
      <Link to='/home'>
        <button className='button'>Go to the main page</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
