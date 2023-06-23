import { configureStore } from "@reduxjs/toolkit";

// reducer
import users from "./slices/posts";

export default configureStore({
  reducer: {
    users,
  },
});
