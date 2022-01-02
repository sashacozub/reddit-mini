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
    permalink,
    id,
    score,
    title,
    is_video,
    media,
    url,
    author,
    created_utc,
    num_comments,
    over_18,
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
        <Link to={`${permalink}`}>
          <h2 onClick={handlePostSelect}>
            {title} {over_18 && <span className='nsfw-icon'>NSFW</span>}
          </h2>
        </Link>
        {is_video && (
          <div className='media-ctr'>
            <video
              src={media.reddit_video.fallback_url}
              controls
              loop={true}
              preload='auto'
              className={`post-media ${over_18 && 'over-18-content'}`}
            />
          </div>
        )}
        {url && (
          <div className='media-ctr'>
            <img src={url} alt='' className='post-media' />
          </div>
        )}
        <hr />
        <div className='post-details'>
          <p>by {author}</p>
          <p>{moment.unix(created_utc).fromNow()}</p>
          <Link
            to={`${permalink}`}
            onClick={handlePostSelect}
            className='post-comments-btn'>
            <GoComment className='comment-icon' />
            <p>{numberFormat(num_comments)}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostContent;
