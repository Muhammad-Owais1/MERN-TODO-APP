import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice.js";

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
