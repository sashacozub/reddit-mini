import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchComments,
  selectSelectedPostId,
  selectComments,
  selectCommentsStatus,
} from './commentsSlice';

const Comments = () => {
  const selectedPostId = useSelector(selectSelectedPostId);
  const commentsStatus = useSelector(selectCommentsStatus);
  const comments = useSelector(selectComments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments(selectedPostId));
  }, [dispatch, selectedPostId]);

  let content;

  if (commentsStatus === 'succeeded') {
    console.log('from comments component: ', comments);
  }

  return <div>Comments</div>;
};

export default Comments;
