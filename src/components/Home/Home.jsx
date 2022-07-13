import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../../features/movies/MovieSlice';
import MovieListing from '../MovieListing/MovieListing';
function Home() {
  const dispatch = useDispatch();
  const { searchTerm } = useSelector((state) => state.movieList);
  useEffect(() => {
    dispatch(fetchAsyncMovies(searchTerm));
    dispatch(fetchAsyncShows(searchTerm));
  }, [dispatch, searchTerm]);

  return (
    <>
      <div>
        <div className="banner-img"></div>
        <MovieListing />
      </div>
    </>
  );
}

export default Home;
