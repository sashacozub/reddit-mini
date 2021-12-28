import { configureStore } from '@reduxjs/toolkit';

import subredditsListReducer from './features/SubredditsList/subredditsListSlice';
import subredditReducer from './features/SubredditPosts/subredditPostsSlice';
import commentsPageReducer from './features/CommentsPage/commentsPageSlice';

export default configureStore({
  reducer: {
    subredditsList: subredditsListReducer,
    subreddit: subredditReducer,
    commentsPage: commentsPageReducer,
  },
});
