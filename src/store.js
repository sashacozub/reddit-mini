import { configureStore } from '@reduxjs/toolkit';

import subredditsListReducer from './features/SubredditsList/subredditsListSlice';
import subredditReducer from './features/SubredditPosts/subredditPostsSlice';
import commentsReducer from './features/Comments/commentsSlice';

export default configureStore({
  reducer: {
    subredditsList: subredditsListReducer,
    subreddit: subredditReducer,
    comments: commentsReducer,
  },
});
