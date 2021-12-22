import { configureStore } from '@reduxjs/toolkit';

import allSubredditsReducer from './features/AllSubreddits/allSubredditsSlice';
import subredditReducer from './features/Subreddit/subredditSlice';

export default configureStore({
  reducer: {
    subreddits: allSubredditsReducer,
    subreddit: subredditReducer,
  },
});
