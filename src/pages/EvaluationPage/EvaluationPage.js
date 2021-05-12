import React, { Component, createRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faStar } from '@fortawesome/free-solid-svg-icons';
import './EvaluationPage.scss';

export default class EvaluationPage extends Component {
  constructor(props) {
    super(props);
    this.initItemsRef = createRef();
    this.addItemsRef = createRef();
    this.initItemsRef.current = 0;
    this.addItemsRef.current = 5;
    this.state = {
      initItems: this.initItemsRef.current,
      addItems: this.addItemsRef.current,
      movieData: [],
    };
  }

  componentDidMount() {
    this.getMovieData();
    window.addEventListener('scroll', this.infinityScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.infinityScroll);
  }

  getMovieData = () => {
    const { initItems, addItems, movieData } = this.state;
    //mockData는 따로 config에 저장하지 않았습니당
    const MOVIE_DATA = '/data/movieMockData.json';
    fetch(MOVIE_DATA)
      .then(res => res.json())
      .then(feedData => {
        const sliceData = feedData.slice(initItems, addItems);
        this.setState({ movieData: [...movieData, ...sliceData] });
      });
  };

  infinityScroll = () => {
    const scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    const scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      this.setState({
        initItems: this.state.addItems,
        addItems: this.state.addItems + this.addItemsRef.current,
      });
      this.getMovieData();
    }
  };

  render() {
    console.log(this.addItemsRef);
    return (
      <section className="evaluationSection">
        <div className="evaluationHeader">
          <h2 className="evaluationCount">14</h2>
          <p className="hurryText">
            이제 알듯 말듯 하네요. 조금만 더 평가해주세요!
          </p>
          <div className="evaluationMenu">
            <ul>
              <li>영화</li>
              <li>TV프로그램</li>
              <li>책</li>
            </ul>
          </div>
          <div className="evaluationCategory">
            <button>🔻랜덤 영화</button>
          </div>
        </div>
        <div className="evaluationList">
          <ul>
            {this.state.movieData.map(movie => {
              return (
                <li key={movie.id}>
                  <img src={movie.thumbnail} />
                  <div className="movieInfos">
                    <div className="movieInfoColumn">
                      <div className="evaluationMovieTitle">
                        <span className="evaluationMovieTitle">
                          {movie.title}
                        </span>
                        <span className="evaluationIcon">
                          <FontAwesomeIcon icon={faEllipsisV} />
                        </span>
                      </div>
                      <div className="movieYearCountry">
                        {movie.release_date} - {movie.country}
                      </div>
                    </div>
                    <div className="movieInfoColumn">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  }
}
