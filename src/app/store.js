import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './../features/counter/counterSlice';
// import { combineReducers } from "redux";

// const reducer = combineReducers({
//   // we will return here, you have to include all your Reducers here!
// });

export const store = configureStore({
  reducer: {
      counter: counterReducer
  },
})