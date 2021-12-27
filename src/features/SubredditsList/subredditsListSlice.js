import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getAllSubreddits } from '../../api/reddit';

const initialState = {
  subredditsList: [],
  status: 'idle',
  error: null,
};

export const fetchAllSubreddits = createAsyncThunk(
  'subredditsList/fetchAllSubreddits',
  async () => {
    const response = await getAllSubreddits();
    return response;
  }
);

const subredditsListSlice = createSlice({
  name: 'subredditsList',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllSubreddits.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchAllSubreddits.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.subredditsList = state.subredditsList.concat(action.payload);
      })
      .addCase(fetchAllSubreddits.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default subredditsListSlice.reducer;

export const selectAllSubreddits = (state) =>
  state.subredditsList.subredditsList;
export const selectAllSubredditsStatus = (state) => state.subredditsList.status;
export const selectAllSubredditsError = (state) => state.subredditsList.error;
