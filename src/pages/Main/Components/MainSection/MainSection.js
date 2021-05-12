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
    fetch('받을 API 주소', {
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
    return (
      <section className="mainSection">
        <div className="mainTitle">
          <p>박스오피스 순위</p>
        </div>
        <section className="mainMovie">
          <button>이전</button>
          <ul>
            {movieInfomationList.map(movie => {
              return (
                <MainSectionMovieList
                  id={movie.id}
                  title={movie.korean_title}
                  country={movie.country}
                  releaseDate={movie.release_date}
                  thumbnailImg={movie.thumbnail_img}
                />
              );
            })}
          </ul>
          <button>다음</button>
        </section>
      </section>
    );
  }
}
