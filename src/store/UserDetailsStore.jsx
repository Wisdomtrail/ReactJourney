import { configureStore } from '@reduxjs/toolkit';
import userDetailReducer from "./UserDetailSlice";

const store = configureStore({
  reducer: {
    userDetails: userDetailReducer,
  }
});

export default store;
