import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import StarRating from '../../CommonComponents/StarRating';
import './ReviewMovieList.scss';

export default class ReviewMovieList extends Component {
  render() {
    const {
      id,
      movieTitle,
      imgSrc,
      movieReleaseDate,
      movieCountry,
      updateRatingCount,
    } = this.props;

    return (
      <li className="reviewMovieList">
        <img alt={`${movieTitle}포스터`} src={imgSrc} />
        <div className="movieInfos">
          <div className="movieInfoColumn">
            <div className="reviewMovieTitle">
              <span>{movieTitle}</span>
              <span className="reviewIcon">
                <FontAwesomeIcon icon={faEllipsisV} />
              </span>
            </div>
            <div className="movieYearCountry">
              {movieReleaseDate && movieReleaseDate.slice(0, 4)}·{movieCountry}
            </div>
          </div>
          <div className="movieInfoColumn">
            <StarRating id={id} updateRatingCount={updateRatingCount} />
          </div>
        </div>
      </li>
    );
  }
}
