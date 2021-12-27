import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectSubredditPosts,
  selectSubredditStatus,
  selectSubredditError,
  selectSelectedSubreddit,
  fetchPosts,
} from '../SubredditPosts/subredditPostsSlice';

import PostContent from '../PostContent/PostContent';

const Subreddit = () => {
  const selectedSubreddit = useSelector(selectSelectedSubreddit);
  const posts = useSelector(selectSubredditPosts);
  const status = useSelector(selectSubredditStatus);
  const error = useSelector(selectSubredditError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(selectedSubreddit));
  }, [dispatch, selectedSubreddit]);

  let content;

  if (status === 'loading') {
    content = <h2 style={{ margin: '3rem' }}>Loading posts...</h2>;
  } else if (status === 'succeeded') {
    console.log(posts);
    content = posts.map((post) => {
      return <PostContent post={post} key={post.id} />;
    });
  } else if (status === 'failed') {
    content = <h2 style={{ margin: '3rem' }}>{error}</h2>;
  }

  return <>{content}</>;
};

export default Subreddit;
