import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import moment from 'moment';
import { GoComment } from 'react-icons/go';

import './SubredditPosts.css';

import { fetchPosts } from '../SubredditPosts/subredditPostsSlice';
import {
  selectSubredditPosts,
  selectSubredditStatus,
  selectSelectedSubreddit,
} from '../SubredditPosts/subredditPostsSlice';

import { numberFormat } from '../../utils/numberFormat';

const Subreddit = () => {
  const subredditPostsStatus = useSelector(selectSubredditStatus);
  const selectedPosts = useSelector(selectSubredditPosts);
  const selectedSubreddit = useSelector(selectSelectedSubreddit);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(selectedSubreddit));
  }, [dispatch, selectedSubreddit]);

  let content;

  if (subredditPostsStatus === 'loading') {
    content = <p style={{ margin: '3rem' }}>Loading posts...</p>;
  } else if (subredditPostsStatus === 'succeeded') {
    console.log(selectedPosts);
    content = selectedPosts.map((post) => {
      return (
        <div key={post.id} className='regular-box post-ctr'>
          <div className='post-aside'>
            <h6>Votes</h6>
            <small className='votes-num'>{numberFormat(`${post.score}`)}</small>
          </div>
          <div className='post-main'>
            <h6>{post.title}</h6>
            {post.is_video && (
              <video
                src={post.media.reddit_video.fallback_url}
                controls
                loop={true}
                preload='auto'
              />
            )}
            {post.url_overridden_by_dest && (
              <img
                src={post.url_overridden_by_dest}
                alt=''
                className='post-media'
              />
            )}
            <hr />
            <div className='post-details'>
              <p>by {post.author}</p>
              <p>{moment.unix(post.created_utc).fromNow()}</p>
              <button className='post-comments'>
                <GoComment className='comment-icon' />
                <p>{post.num_comments}</p>
              </button>
            </div>
          </div>
        </div>
      );
    });
  } else if (subredditPostsStatus === 'failed') {
    content = <p>Error</p>; //change to useSelect Error
  }

  return <h1>{content}</h1>;
};

export default Subreddit;
