import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchComments,
  selectSelectedPostId,
  selectComments,
  selectCommentsStatus,
} from './commentsSlice';

import './Comments.css';

const Comments = () => {
  const postId = useSelector(selectSelectedPostId);
  const comments = useSelector(selectComments);
  const status = useSelector(selectCommentsStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments(postId));
  }, [dispatch, postId]);

  let content;

  if (status === 'succeeded') {
    console.log('from comments component: ', comments);
  }

  return <h2>Comments</h2>;
};

export default Comments;
