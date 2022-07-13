import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  fetchAsyncMovies,
  fetchAsyncShows,
  searchTermReducer,
} from '../../features/movies/MovieSlice';
import user_img from '../../images/user.png';
import './Header.scss';
function Header() {
  const [searchTerm, setsearchTerm] = useState('');
  const dispatch = useDispatch();
  const submitSearchHandler = (e) => {
    //comment
    e.preventDefault();
    if (searchTerm.length !== 0) {
      dispatch(searchTermReducer(searchTerm));
      dispatch(fetchAsyncMovies(searchTerm));
      dispatch(fetchAsyncShows(searchTerm));
    }
    setsearchTerm('');
  };
  return (
    <>
      <div className="header">
        <Link to="/">
          <div className="header__div logo">
            <span className="logo_span logo--hover">Movie App</span>
          </div>
        </Link>
        <div className="search-movie">
          <form onSubmit={submitSearchHandler}>
            <label></label>
            <input
              type="text"
              placeholder="Search movie"
              value={searchTerm}
              onChange={(e) => setsearchTerm(e.target.value)}
            />
            <button type="submit">submit</button>
          </form>
        </div>
        <div className="header__div user_image">
          <img className="user_image--img" src={user_img} alt="user_img" />
        </div>
      </div>
    </>
  );
}

export default Header;
