import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './Subreddits.css';

import { selectAllSubreddits, fetchSubreddits } from './subredditsSlice.js';

const Subreddits = () => {
  const subreddits = useSelector(selectAllSubreddits);
  const subredditsStatus = useSelector((state) => state.subreddits.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (subredditsStatus === 'idle') {
      dispatch(fetchSubreddits());
    }

    if (subredditsStatus === 'succeeded') {
      console.log(subreddits);
    }
  }, [dispatch, subredditsStatus, subreddits]);

  const subredditsResults = subreddits.map((post) => (
    <li key={post.id}>{post.display_name}</li>
  ));

  return (
    <div className='regular-box subreddits-ctr'>
      <h2>Subreddits</h2>
      <ul>{subredditsResults}</ul>
    </div>
  );
};

export default Subreddits;
