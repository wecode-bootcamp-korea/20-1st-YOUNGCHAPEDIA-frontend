import React from 'react';
import './MainSectionMovieList.scss';
import { withRouter } from 'react-router-dom';
class MainSectionMovieList extends React.Component {
  goToDetailPage = () => {
    const id = this.props.id;
    this.props.history.push(`/movie/detail/${id}`);
  };

  render() {
    const {
      title,
      country,
      releaseDate,
      thumbnailImgUrl,
      width,
      netflix,
      watcha,
      movieListRanking,
    } = this.props;
    return (
      <li
        onClick={this.goToDetailPage}
        style={{
          transform: `translateX(-${width}px)`,
          transition: 'transform .8s ', //영화 각 리스트에 translateX 스타일 지정
        }}
        className="mainSectionMovieList"
      >
        <div
          className={
            (netflix && 'listNetflixicon') || (watcha && 'listWatchaicon')
          }
        ></div>
        <div className="listRanking">{movieListRanking + 1}</div>
        <img alt="test" src={thumbnailImgUrl} />
        <div className="listDescription">
          <p className="listDescriptionTitle">{title}</p>
          <p className="listDescriptionYear">
            {country} ・ {releaseDate}
          </p>
          <p className="listDescriptionGrade">평균 3.8</p>
        </div>
      </li>
    );
  }
}

export default withRouter(MainSectionMovieList);
