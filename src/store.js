import { configureStore } from '@reduxjs/toolkit';

import subredditsReducer from './features/Subreddits/subredditsSlice';

export default configureStore({
  reducer: {
    subreddits: subredditsReducer,
  },
});
