import React from 'react';
import MainSectionMovieList from '../MainSectionMovieList/MainSectionMovieList';
import './MainSection.scss';
export default class MainSection extends React.Component {
  constructor() {
    super();
    this.state = {
      movieListContainerWidth: 0,
      movieListIndex: 0,
    };
    this.containerWidth = React.createRef();
  }

  //다음 슬라이드 이동 함수
  handleNextSliding = () => {
    const { movieListIndex } = this.state;
    const { movieInformationList } = this.props;
    if (movieListIndex === Math.floor(movieInformationList.length / 5) - 1) {
      return;
    }
    this.setState({
      movieListIndex: movieListIndex + 1,
      movieListContainerWidth:
        this.containerWidth.current.scrollWidth * (movieListIndex + 1),
    });
  };

  //이전 슬라이드 이동 함수
  handlePreSliding = () => {
    const { movieListIndex } = this.state;
    if (movieListIndex === 0) {
      return;
    }
    this.setState({
      movieListIndex: movieListIndex - 1,
      movieListContainerWidth:
        this.containerWidth.current.scrollWidth * (movieListIndex - 1),
    });
  };

  render() {
    const { movieListContainerWidth, movieListIndex } = this.state;
    const { movieInformationList, movieTitleIndex } = this.props;
    return (
      <section className="mainSection">
        <div className="mainTitle">
          <p>{Title[movieTitleIndex]}</p>
        </div>
        <button
          disabled={movieListIndex === 0} //초기값일때 이전버튼 비활성화
          onClick={this.handlePreSliding}
          className="mainMoviePreBtn"
        >
          <i class="fas fa-chevron-left"></i>
        </button>
        <section className="mainMovie" ref={this.containerWidth}>
          <ul>
            {movieInformationList.map((movie, movieListRanking) => {
              const {
                id,
                korean_title,
                country,
                release_date,
                thumbnail_img,
                netflix,
                watcha,
              } = movie;
              return (
                <MainSectionMovieList
                  id={id}
                  goToDetail={this.props.goToDetailPage}
                  movieListRanking={movieListRanking}
                  key={id}
                  title={korean_title}
                  country={country}
                  releaseDate={release_date}
                  thumbnailImgUrl={thumbnail_img}
                  watcha={watcha}
                  netflix={netflix}
                  width={movieListContainerWidth}
                />
              );
            })}
          </ul>
          <div></div>
        </section>
        <button onClick={this.handleNextSliding} className="mainMovieNextBtn">
          <i class="fas fa-chevron-right"></i>
        </button>
      </section>
    );
  }
}

const Title = {
  0: '박스오피스 순위',
  1: '넷플릭스 순위',
  2: '왓챠 순위',
};
