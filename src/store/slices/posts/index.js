import { createSlice } from "@reduxjs/toolkit";
// axios
import axios from "axios";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    list: [],
  },
  reducers: {
    setPostsList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setPostsList } = postsSlice.actions;

export default postsSlice.reducer;

export const fetchAllPosts = () => (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      console.log(response.data, "response fdo");
      dispatch(setPostsList(response.data));
    })
    .catch((error) => console.log(error));
};
