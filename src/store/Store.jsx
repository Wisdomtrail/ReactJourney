import { configureStore } from '@reduxjs/toolkit';
import countReducer from "./CounterSlice";
import Userdetails from './UserDetailSlice';

const store = configureStore({
  reducer: {
    counter: countReducer,
  }
});

export default store;