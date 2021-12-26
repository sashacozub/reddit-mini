import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchPosts } from '../SubredditPosts/subredditPostsSlice';
import {
  selectSubredditPosts,
  selectSubredditStatus,
  selectSelectedSubreddit,
} from '../SubredditPosts/subredditPostsSlice';

import PostContent from '../PostContent/PostContent';

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
      return <PostContent post={post} key={post.id} />;
    });
  } else if (subredditPostsStatus === 'failed') {
    content = <p>Error</p>; //change to useSelect Error
  }

  return <h1>{content}</h1>;
};

export default Subreddit;
