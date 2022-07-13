import { configureStore } from '@reduxjs/toolkit';
import MovieReducer from './movies/MovieSlice';
export const store = configureStore({
  reducer: {
    movieList: MovieReducer,
  },
});
