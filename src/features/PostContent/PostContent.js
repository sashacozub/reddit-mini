import React from 'react';

import moment from 'moment';
import { GoComment } from 'react-icons/go';

import { numberFormat } from '../../utils/numberFormat';

import './PostContent.css';

const PostContent = ({ post }) => {
  const {
    score,
    title,
    is_video,
    media,
    url_overridden_by_dest,
    author,
    created_utc,
    num_comments,
  } = post;

  return (
    <div className='post-ctr regular-box'>
      <div className='post-aside'>
        <h6>Votes</h6>
        <small className='votes-num'>{numberFormat(`${score}`)}</small>
      </div>
      <div className='post-main'>
        <h6>{title}</h6>
        {is_video && (
          <video
            src={media.reddit_video.fallback_url}
            controls
            loop={true}
            preload='auto'
          />
        )}
        {url_overridden_by_dest && (
          <img src={url_overridden_by_dest} alt='' className='post-media' />
        )}
        <hr />
        <div className='post-details'>
          <p>by {author}</p>
          <p>{moment.unix(created_utc).fromNow()}</p>
          <button className='post-comments'>
            <GoComment className='comment-icon' />
            <p>{num_comments}</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostContent;
