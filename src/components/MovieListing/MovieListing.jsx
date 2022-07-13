import { useSelector } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesListing.scss';
import Slider from 'react-slick';
import { settings } from '../../common/Setting';
const MovieListing = () => {
  const { movies } = useSelector((state) => state.movieList);
  const moviesInfo = movies.Search;
  let renderMovies =
    movies.Response === 'True' ? (
      moviesInfo.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className="movie-error">
        <div>{movies.Error}</div>
      </div>
    );
  const { shows } = useSelector((state) => state.movieList);
  let showsInfo = shows.Search;
  let renderShows =
    shows.Response === 'True' ? (
      showsInfo.map((show, index) => <MovieCard key={index} data={show} />)
    ) : (
      <div className="movie-error">
        <div>{shows.Error}</div>
      </div>
    );
  return (
    <>
      <div className="movie-wrapper">
        <div className="movie-list">
          <h2>Movies</h2>
          {/* <div className="movie-container"> */}
          <Slider {...settings}>{renderMovies}</Slider>
          {/* </div> */}
        </div>
        <div className="movie-list">
          <h2>Shows</h2>
          {/* <div className="movie-container"> */}
          <Slider {...settings}>{renderShows}</Slider>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};
export default MovieListing;
