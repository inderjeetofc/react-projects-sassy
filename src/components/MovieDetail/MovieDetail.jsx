import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  fetchAsyncMovieorShowDetail,
  removeSelectedDetail,
} from '../../features/movies/MovieSlice';
import './MovieDetail.scss';

function MovieDetail() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const { selectedDetail } = useSelector((state) => state.movieList);
  useEffect(() => {
    dispatch(fetchAsyncMovieorShowDetail(imdbID));
    return () => dispatch(removeSelectedDetail());
  }, [dispatch, imdbID]);

  return (
    <>
      {Object.keys(selectedDetail).length === 0 ? (
        <div>...loading</div>
      ) : (
        <div className="movie-detail-container">
          <div className="section-left">
            <div className="title">{selectedDetail.Title}</div>
            <div className="ratings-detail">
              <span>
                <i className="fa fa-star"></i> Rated : {selectedDetail.Rated}
              </span>
              <span>IMDB Ratings : {selectedDetail.imdbRating}/10</span>
              <span>Released :{selectedDetail.Released}</span>
              <span>Runtime : {selectedDetail.Runtime}</span>
              <span>Year : {selectedDetail.Year}</span>
            </div>
            <div className="plot-details">Plot : {selectedDetail.Plot}</div>
            <div className="cast-details">
              <ul>
                <li>
                  <span> Director :</span> {selectedDetail.Director}
                </li>
                <li>
                  <span> Genre :</span> {selectedDetail.Genre}
                </li>
                <li>
                  <span>Actors :</span> {selectedDetail.Actors}
                </li>
                <li>
                  <span>Awards :</span> {selectedDetail.Awards}
                </li>
              </ul>
            </div>
          </div>
          <div className="section-right">
            <img src={`${selectedDetail.Poster}`} alt="" />
          </div>
        </div>
      )}
    </>
  );
}

export default MovieDetail;
