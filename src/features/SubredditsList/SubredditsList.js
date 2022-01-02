import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  useEffect(() => {
    if (subredditsStatus === 'idle') {
      dispatch(fetchAllSubreddits());
      // navigate(selectedSubreddit);
    }

    // if (window.localStorage.getItem('permalink')) {
    // const permalink = window.localStorage.getItem('permalink');
    // console.log(permalink);
    // navigate(permalink);
    // navigate(selectedSubreddit);
    // }
  }, [dispatch, subredditsStatus, navigate, selectedSubreddit]);

  let content;

  if (subredditsStatus === 'loading') {
    content = <h6 style={{ margin: '3rem' }}>Loading subreddits...</h6>;
  } else if (subredditsStatus === 'succeeded') {
    content = subreddits.map((post) => (
      <Link to={`${post.url}`} key={post.id}>
        <button
          className={`${
            post.url === selectedSubreddit ? 'selected-subreddit' : ''
          } subreddit-btn`}
          onClick={() => {
            dispatch(setSelectedSubreddit(post.url));
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
