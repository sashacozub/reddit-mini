import { configureStore } from '@reduxjs/toolkit';

import allSubredditsReducer from './features/AllSubreddits/allSubredditsSlice';
import subredditReducer from './features/SubredditPosts/subredditPostsSlice';
import commentsReducer from './features/Comments/commentsSlice';

export default configureStore({
  reducer: {
    subreddits: allSubredditsReducer,
    subreddit: subredditReducer,
    comments: commentsReducer,
  },
});
