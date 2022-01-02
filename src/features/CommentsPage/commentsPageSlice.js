import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getPostComments } from '../../api/reddit';

const initialState = {
  selectedPostId: '',
  selectedPost: {},
  permalink: '',
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
  reducers: {
    setSelectedPostId(state, action) {
      state.selectedPostId = action.payload;
    },
    setSelectedPost(state, action) {
      state.selectedPost = action.payload;
    },
  },
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

export const { setSelectedPostId, setSelectedPost, setPermalink } =
  commentsSlice.actions;

export const selectComments = (state) => state.commentsPage.comments;
export const selectSelectedPost = (state) => state.commentsPage.selectedPost;
export const selectSelectedPostId = (state) =>
  state.commentsPage.selectedPostId;
export const selectCommentsStatus = (state) => state.commentsPage.status;
export const selectCommentsError = (state) => state.commentsPage.error;
