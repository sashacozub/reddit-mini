import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import './AllSubreddits.css';

import { selectAllSubreddits, fetchSubreddits } from './allSubredditsSlice';
import {
  selectSelectedSubreddit,
  setSelectedSubreddit,
} from '../SubredditPosts/subredditPostsSlice';
import Avatar from '../Avatar/Avatar';

const Subreddits = () => {
  const subreddits = useSelector(selectAllSubreddits);
  const subredditsStatus = useSelector((state) => state.subreddits.status);
  const error = useSelector((state) => state.subreddits.error);
  const selectedSubreddit = useSelector(selectSelectedSubreddit);
  const dispatch = useDispatch();

  useEffect(() => {
    if (subredditsStatus === 'idle') {
      dispatch(fetchSubreddits());
    }
  }, [dispatch, subredditsStatus]);

  let content;

  if (subredditsStatus === 'loading') {
    content = <p>Loading...</p>;
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
    content = error;
  }

  return (
    <div className='regular-box subreddits-ctr'>
      <h2>Subreddits</h2>
      <ul>{content}</ul>
    </div>
  );
};

export default Subreddits;
