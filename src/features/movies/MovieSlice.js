import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import MovieUrl from '../../common/apis/movieApi';
import movieAPIKey from '../../common/apis/movieApiKeys';
export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async (searchTerm) => {
    const { data } = await MovieUrl.get(
      `?apikey=${movieAPIKey}&s=${searchTerm}&type=movie`
    );
    return data;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  'shows/fetchAsyncShows',
  async (searchTerm) => {
    const { data } = await MovieUrl.get(
      `?apikey=${movieAPIKey}&s=${searchTerm}&type=series`
    );
    return data;
  }
);
export const fetchAsyncMovieorShowDetail = createAsyncThunk(
  'detail/fetchAsyncMovieorShowDetail',
  async (imdbID) => {
    const { data } = await MovieUrl.get(`?apikey=${movieAPIKey}&i=${imdbID}`);
    return data;
  }
);
const initialState = {
  movies: {},
  shows: {},
  selectedDetail: {},
  searchTerm: 'friends',
};
export const MovieSlice = createSlice({
  name: 'movieSlice',
  initialState,
  reducers: {
    addMovies: (state = initialState, action) => {
      state.movies = action.payload;
    },
    searchTermReducer: (state, action) => {
      if (action.payload !== '') state.searchTerm = action.payload;
    },
    removeSelectedDetail: (state) => {
      state.selectedDetail = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log('pending');
    },
    [fetchAsyncMovies.fulfilled]: (state, action) => {
      console.log('fullfilled');
      return { ...state, movies: action.payload };
    },
    [fetchAsyncShows.fulfilled]: (state, action) => {
      console.log('fullfilled shows');
      return { ...state, shows: action.payload };
    },
    [fetchAsyncMovieorShowDetail.fulfilled]: (state, action) => {
      console.log('fullfilled details');
      return { ...state, selectedDetail: action.payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log('rejected');
    },
  },
});
export const { removeSelectedDetail, searchTermReducer } = MovieSlice.actions;
export default MovieSlice.reducer;
