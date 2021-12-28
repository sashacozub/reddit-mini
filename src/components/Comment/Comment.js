import React from 'react';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';

import './Comment.css';

import { numberFormat } from '../../utils/numberFormat';

const Comment = ({ comments }) => {
  return (
    <ul>
      {console.log('here are comments: ', comments)}
      {comments.map((comment) => (
        <li key={comment.id} className='comment-item'>
          <div className='comment-head'>
            <small>Votes: {numberFormat(comment.score)}</small>
            <small>Posted by {comment.author}</small>
            <small>{moment.unix(comment.created_utc).fromNow()}</small>
          </div>
          <p className='comment-text'>
            <ReactMarkdown>{comment.body}</ReactMarkdown>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Comment;
