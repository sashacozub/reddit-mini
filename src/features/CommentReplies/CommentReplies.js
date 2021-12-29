import React from 'react';

import Comment from '../Comment/Comment';

const CommentReplies = ({ comment }) => {
  if (comment.replies) {
    return comment.replies.data.children.map((reply) => (
      <Comment comment={reply.data} key={reply.data.id} />
    ));
  } else {
    return <div></div>;
  }
};

export default CommentReplies;
