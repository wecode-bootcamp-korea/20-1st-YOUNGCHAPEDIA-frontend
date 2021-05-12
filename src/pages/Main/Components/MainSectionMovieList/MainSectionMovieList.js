import React from 'react';
import './MainSectionMovieList.scss';
export default class MainSectionMovieList extends React.Component {
  render() {
    const { id, korean_title, country, release_date } = this.props;
    return (
      <li className="mainSectionMovieList">
        <div className="listRanking">1</div>
        <img
          alt="test"
          src="https://movie-phinf.pstatic.net/20210421_37/1618971733493B4ykS_JPEG/movie_image.jpg"
        />
        <div className="listDes">
          <p className="listDesTitle">{korean_title}</p>
          <p className="listDesYear">{country}</p>
          <p className="listDesGrade">평균 3.8</p>
        </div>
      </li>
    );
  }
}
