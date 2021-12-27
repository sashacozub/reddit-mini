import React from 'react';

import './Avatar.css';

import { FcReddit } from 'react-icons/fc';

const Avatar = ({ backgroundColor, imageLink, name }) => {
  return (
    <div
      className='subreddit-img-ctr'
      style={{ border: `3px solid ${backgroundColor}` }}>
      {imageLink ? (
        <img src={imageLink} alt={name} />
      ) : (
        <FcReddit className='default-avatar' />
      )}
    </div>
  );
};

export default Avatar;
