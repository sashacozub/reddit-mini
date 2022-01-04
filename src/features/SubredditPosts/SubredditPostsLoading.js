import React from 'react';
import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';

const SubredditPostsLoading = () => {
  return (
    <div className='regular-box'>
      <h1 style={{ marginBottom: '1rem', width: '60%' }}>
        <Skeleton />
      </h1>
      <p>
        <Skeleton count={5} style={{ marginBottom: '0.5rem' }} />
      </p>
    </div>
  );
};

export default SubredditPostsLoading;
