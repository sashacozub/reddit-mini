import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import moment from 'moment';

import './SubredditPosts.css';

import { fetchPosts } from '../SubredditPosts/subredditPostsSlice';
import {
  selectSubredditPosts,
  selectSubredditStatus,
  selectSelectedSubreddit,
} from '../SubredditPosts/subredditPostsSlice';

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
          <h5>{post.title}</h5>
          <img src={post.url} alt='' className='post-image' />
          <hr />
          <div className='post-details'>
            <h6>{post.author}</h6>
            <h6>{moment.unix(post.created_utc).fromNow()}</h6>
            <h6>comments icon</h6>
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
