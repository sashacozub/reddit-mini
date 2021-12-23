import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
          {console.log(post.url)}
          <img
            src={post.url}
            alt=''
            style={{ width: '400px', height: 'auto' }}
          />
        </div>
      );
    });
  } else if (subredditPostsStatus === 'failed') {
    content = <p>Error</p>; //change to useSelect Error
  }

  return <h1>{content}</h1>;
};

export default Subreddit;
