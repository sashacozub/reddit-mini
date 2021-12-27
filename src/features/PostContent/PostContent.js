import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { GoComment } from 'react-icons/go';

import { setSelectedPostId } from '../Comments/commentsSlice';

import { numberFormat } from '../../utils/numberFormat';

import './PostContent.css';

const PostContent = ({ post }) => {
  const [commentsOpen, setCommentsOpen] = useState(false);

  const dispatch = useDispatch();

  const {
    subreddit,
    id,
    score,
    title,
    is_video,
    media,
    url_overridden_by_dest,
    author,
    created_utc,
    num_comments,
  } = post;

  return (
    <div className='post-ctr regular-box'>
      <div className='post-aside'>
        <h6>Votes</h6>
        <small className='votes-num'>{numberFormat(`${score}`)}</small>
      </div>
      <div className='post-main'>
        <Link to={`/r/${subreddit}/comments/${id}`}>
          <h2 onClick={() => dispatch(setSelectedPostId(id))}>{title}</h2>
        </Link>
        {is_video && (
          <video
            src={media.reddit_video.fallback_url}
            controls
            loop={true}
            preload='auto'
          />
        )}
        {url_overridden_by_dest && (
          <img src={url_overridden_by_dest} alt='' className='post-media' />
        )}
        <hr />
        <div className='post-details'>
          <p>by {author}</p>
          <p>{moment.unix(created_utc).fromNow()}</p>
          <button
            className='post-comments-btn'
            onClick={() => setCommentsOpen(!commentsOpen)}>
            <GoComment className='comment-icon' />
            <p>{num_comments}</p>
          </button>
        </div>
        <div
          className={`post-comments ${commentsOpen && 'post-comments-open'}`}>
          <p style={{ backgroundColor: 'tomato', marginTop: '3rem' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
            quos dolore exercitationem provident deleniti obcaecati aspernatur
            aut libero possimus debitis quasi nostrum officia ab voluptas iusto
            in fugit facilis doloremque assumenda odit optio delectus? Dolores
            nemo itaque ut iure optio quis, amet delectus ad voluptas nobis? Et
            illo amet neque est, assumenda magnam aspernatur corporis,
            voluptatibus facilis temporibus sit reiciendis similique fugit natus
            dignissimos repudiandae eaque quis, vitae accusantium distinctio
            esse veniam! Natus eos soluta vitae laborum voluptate repellendus
            perspiciatis enim nobis, voluptates autem beatae delectus adipisci
            amet? Quibusdam harum odit magni ducimus explicabo iste itaque
            necessitatibus in aliquam blanditiis!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostContent;
