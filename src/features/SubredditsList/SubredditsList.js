import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

import './SubredditsList.css';

import {
  selectAllSubreddits,
  selectAllSubredditsStatus,
  selectAllSubredditsError,
  fetchAllSubreddits,
} from './subredditsListSlice';
import {
  selectSelectedSubreddit,
  setSelectedSubreddit,
} from '../SubredditPosts/subredditPostsSlice';

import Avatar from '../Avatar/Avatar';

const Subreddits = () => {
  const subreddits = useSelector(selectAllSubreddits);
  const subredditsStatus = useSelector(selectAllSubredditsStatus);
  const error = useSelector(selectAllSubredditsError);
  const selectedSubreddit = useSelector(selectSelectedSubreddit);

  const dispatch = useDispatch();

  useEffect(() => {
    if (subredditsStatus === 'idle') {
      dispatch(fetchAllSubreddits());

      if (!window.localStorage.storageSubreddit) {
        window.localStorage.setItem('storageSubreddit', selectedSubreddit);
      } else {
        const previousSubreddit =
          window.localStorage.getItem('storageSubreddit');
        dispatch(setSelectedSubreddit(previousSubreddit));
      }
    }
  }, [dispatch, subredditsStatus, selectedSubreddit]);

  let content;

  if (subredditsStatus === 'loading') {
    content = (
      <>
        <Skeleton style={{ marginBottom: '10px', height: '60px' }} />
        <Skeleton style={{ marginBottom: '10px', height: '60px' }} />
        <Skeleton style={{ marginBottom: '10px', height: '60px' }} />
        <Skeleton style={{ marginBottom: '10px', height: '60px' }} />
        <Skeleton style={{ marginBottom: '10px', height: '60px' }} />
      </>
    );
  } else if (subredditsStatus === 'succeeded') {
    content = subreddits.map((post) => (
      <Link to={`${post.url}`} key={post.id}>
        <button
          className={`${
            post.url === selectedSubreddit ? 'selected-subreddit' : ''
          } subreddit-btn`}
          onClick={() => {
            dispatch(setSelectedSubreddit(post.url));
            window.localStorage.setItem('storageSubreddit', post.url);
          }}>
          <Avatar
            backgroundColor={post.primary_color}
            imageLink={post.icon_img}
            name={post.display_name}
          />
          <h6>{post.display_name}</h6>
        </button>
      </Link>
    ));
  } else if (subredditsStatus === 'failed') {
    content = <h2 style={{ margin: '3rem' }}>{error}</h2>;
  }

  return (
    <div className='regular-box subreddits-ctr'>
      <h2>Subreddits</h2>
      <ul>{content}</ul>
    </div>
  );
};

export default Subreddits;
