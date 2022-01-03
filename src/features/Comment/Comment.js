import React from 'react';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';

import './Comment.css';

import { numberFormat } from '../../utils/numberFormat';
import CommentReplies from '../CommentReplies/CommentReplies';

const Comment = ({ comment }) => {
  return (
    <li className='comment-item'>
      {/* {console.log(comment)} */}
      <div className='comment-head'>
        <small>Votes: {numberFormat(comment.score)}</small>
        <small>Posted by {comment.author}</small>
        <small>{moment.unix(comment.created_utc).fromNow()}</small>
      </div>
      <ReactMarkdown className='comment-text' children={comment.body} />
      <ul>
        {comment.replies !== undefined && <CommentReplies comment={comment} />}
      </ul>
    </li>
  );
};

export default Comment;
