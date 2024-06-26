import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectAllPosts = (state) => state.posts;

//new
export const selectPostsById = (state, postId) =>
  state.posts.find((posts) => posts.Id === postId);

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
