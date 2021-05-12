import React, { Component, createRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faStar } from '@fortawesome/free-solid-svg-icons';
import './ReviewPage.scss';

export default class ReviewPage extends Component {
  constructor(props) {
    super(props);
    this.scrollBoxRef = createRef();
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
    window.addEventListener('scroll', this.infiniteScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.infiniteScroll);
  }

  getMovieData = () => {
    const { initItems, addItems, movieData } = this.state;
    //mockData 주소는 따로 config에 저장하지 않았습니당
    const MOVIE_DATA = '/data/movieMockData.json';
    fetch(MOVIE_DATA)
      .then(res => res.json())
      .then(feedData => {
        const sliceData = feedData.slice(initItems, addItems);
        this.setState({ movieData: [...movieData, ...sliceData] });
      });
  };

  infiniteScroll = () => {
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
    return (
      <section className="reviewSection">
        <div className="reviewHeader">
          <h2 className="reviewCount">14</h2>
          <p className="reviewNotice">
            이제 알듯 말듯 하네요. 조금만 더 평가해주세요!
          </p>
          <div className="reviewMenu">
            <ul>
              <li>
                <button>영화</button>
              </li>
              <li>
                <button>TV프로그램</button>
              </li>
              <li>
                <button>책</button>
              </li>
            </ul>
          </div>
          <div className="reviewCategory">
            <div>
              <button className="reviewCategoryBtn">🔻랜덤 영화</button>
            </div>
          </div>
        </div>
        <div className="reviewList" ref={this.scrollBoxRef}>
          <ul>
            {this.state.movieData.map(movie => {
              return (
                <li key={movie.id}>
                  <img src={movie.thumbnail} />
                  <div className="movieInfos">
                    <div className="movieInfoColumn">
                      <div className="reviewMovieTitle">
                        <span>{movie.title}</span>
                        <span className="reviewIcon">
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
