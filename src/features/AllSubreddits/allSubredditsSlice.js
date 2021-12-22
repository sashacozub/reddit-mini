import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getAllSubreddits } from '../../api/reddit';

const initialState = {
  subreddits: [],
  status: 'idle',
  error: null,
};

export const fetchSubreddits = createAsyncThunk(
  'subreddits/fetchSubreddits',
  async () => {
    const response = await getAllSubreddits();
    return response;
  }
);

const allSubredditsSlice = createSlice({
  name: 'subreddits',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSubreddits.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchSubreddits.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.subreddits = state.subreddits.concat(action.payload);
      })
      .addCase(fetchSubreddits.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default allSubredditsSlice.reducer;

export const selectAllSubreddits = (state) => state.subreddits.subreddits;
