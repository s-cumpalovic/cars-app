import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counters/slice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
