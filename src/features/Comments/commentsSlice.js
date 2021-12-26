import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getPostComments } from '../../api/reddit';

const initialState = {
  selectedPostId: 'rn92hu',
  comments: [],
  status: 'idle',
  error: null,
};

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async (postId) => {
    const response = await getPostComments(postId);
    return response;
  }
);

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchComments.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default commentsSlice.reducer;

export const selectComments = (state) => state.comments.comments;
export const selectSelectedPostId = (state) => state.comments.selectedPostId;
export const selectCommentsStatus = (state) => state.comments.status;
