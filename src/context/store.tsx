import { configureStore } from "@reduxjs/toolkit";

import InputReducer from "./InputSlice";
import MovieReducer from "./MovieListSlice";

export const store = configureStore({
  reducer: {
    inputValues: InputReducer,
    movieValues: MovieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
