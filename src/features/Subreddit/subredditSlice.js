import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedSubreddit: '/r/Home/',
  posts: [],
  status: 'idle',
  error: null,
};

export const subredditSlice = createSlice({
  name: 'subreddit',
  initialState,
  reducers: {
    setSelectedSubreddit(state, action) {
      state.selectedSubreddit = action.payload;
    },
    getPosts(state, action) {},
  },
});

export default subredditSlice.reducer;

export const { setSelectedSubreddit } = subredditSlice.actions;

export const selectSelectedSubreddit = (state) =>
  state.subreddit.selectedSubreddit;
