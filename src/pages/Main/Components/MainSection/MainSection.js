import React from 'react';
import MainSectionMovieList from '../MainSectionMovieList/MainSectionMovieList';
import './MainSection.scss';
export default class MainSection extends React.Component {
  constructor() {
    super();
    this.state = {
      movieInfomationList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/MainMockData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(movieInfomation => {
        this.setState({
          movieInfomationList: movieInfomation,
        });
      });
  }

  render() {
    const { movieInfomationList } = this.state;
    return (
      <section className="mainSection">
        <div className="mainTitle">
          <p>박스오피스 순위</p>
        </div>
        <section className="mainMovie">
          <ul>
            {movieInfomationList.map(movie => {
              return (
                <MainSectionMovieList
                  key={movie.id}
                  title={movie.korean_title}
                  country={movie.country}
                  releaseDate={movie.release_date}
                  thumbnailImgUrl={movie.thumbnail_img}
                />
              );
            })}
          </ul>
        </section>
      </section>
    );
  }
}
