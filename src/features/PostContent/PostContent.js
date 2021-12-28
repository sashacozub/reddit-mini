import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { GoComment } from 'react-icons/go';

import {
  setSelectedPostId,
  setSelectedPost,
} from '../CommentsPage/commentsPageSlice';

import { numberFormat } from '../../utils/numberFormat';

import './PostContent.css';

const PostContent = ({ post }) => {
  const {
    subreddit,
    id,
    score,
    title,
    is_video,
    media,
    url_overridden_by_dest,
    author,
    created_utc,
    num_comments,
  } = post;

  const dispatch = useDispatch();

  const handlePostSelect = () => {
    dispatch(setSelectedPostId(id));
    dispatch(setSelectedPost(post));
  };

  return (
    <div className='post-ctr regular-box'>
      <div className='post-aside'>
        <h4>Votes</h4>
        <small className='votes-num'>{numberFormat(`${score}`)}</small>
      </div>
      <div className='post-main'>
        <Link to={`/r/${subreddit}/comments/${id}`}>
          <h2 onClick={handlePostSelect}>{title}</h2>
        </Link>
        {is_video && (
          <video
            src={media.reddit_video.fallback_url}
            controls
            loop={true}
            preload='auto'
            className='post-media'
          />
        )}
        {url_overridden_by_dest && (
          <img src={url_overridden_by_dest} alt='' className='post-media' />
        )}
        <hr />
        <div className='post-details'>
          <p>by {author}</p>
          <p>{moment.unix(created_utc).fromNow()}</p>
          <Link
            to={`/r/${subreddit}/comments/${id}`}
            onClick={handlePostSelect}
            className='post-comments-btn'>
            <GoComment className='comment-icon' />
            <p>{num_comments}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostContent;
