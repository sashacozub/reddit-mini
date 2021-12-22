import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getSubredditPosts } from '../../api/reddit';

const initialState = {
  selectedSubreddit: '/r/Home/',
  posts: [],
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
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default subredditSlice.reducer;

export const { setSelectedSubreddit } = subredditSlice.actions;

export const selectSelectedSubreddit = (state) =>
  state.subreddit.selectedSubreddit;

export const selectPosts = (state) => state.subreddit.posts;
