import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.scss';
function MovieCard(props) {
  const { data } = props;
  return (
    <>
      <Link to={`/movie-detail/${data.imdbID}`}>
        <div className="card-item">
          <div className="card-top">
            <img src={data.Poster} alt="" />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default MovieCard;
