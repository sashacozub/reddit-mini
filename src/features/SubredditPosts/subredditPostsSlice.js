import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getSubredditPosts } from '../../api/reddit';

const initialState = {
  selectedSubreddit: '/r/memes/',
  posts: [],
  searchTermFilter: '',
  status: 'idle',
  error: null,
};

export const fetchPosts = createAsyncThunk(
  'subreddit/fetchPosts',
  async (subreddit) => {
    const response = await getSubredditPosts(subreddit);
    return response;
  }
);

export const subredditSlice = createSlice({
  name: 'subreddit',
  initialState,
  reducers: {
    setSelectedSubreddit(state, action) {
      state.selectedSubreddit = action.payload;
    },
    setPostSearchTerm(state, action) {
      state.searchTermFilter = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default subredditSlice.reducer;

export const { setSelectedSubreddit, setPostSearchTerm, setPosts } =
  subredditSlice.actions;

export const selectSelectedSubreddit = (state) =>
  state.subreddit.selectedSubreddit;
export const selectSubredditPosts = (state) => state.subreddit.posts;
export const selectSubredditStatus = (state) => state.subreddit.status;
export const selectSubredditError = (state) => state.subreddit.error;
export const selectSearchTermFilter = (state) =>
  state.subreddit.searchTermFilter;
