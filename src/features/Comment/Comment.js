import React from 'react';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';

import './Comment.css';

import { numberFormat } from '../../utils/numberFormat';
import CommentReplies from '../CommentReplies/CommentReplies';

const Comment = ({ comment }) => {
  // Make sure no empty replies are displayed
  return comment.body ? (
    <li className='comment-item'>
      <div className='comment-head'>
        <small>Votes: {numberFormat(comment.score)}</small>
        <small>Posted by {comment.author}</small>
        <small>{moment.unix(comment.created_utc).fromNow()}</small>
      </div>
      <ReactMarkdown className='comment-text' children={comment.body} />
      <ul>
        <CommentReplies comment={comment} />
      </ul>
    </li>
  ) : (
    <></>
  );
};

export default Comment;
