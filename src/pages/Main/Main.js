import React from 'react';
import MainSection from './Components/MainSection/MainSection';
import './Main.scss';
import { withRouter } from 'react-router-dom';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      movieInformationList: [],
    };
  }

  getBoxOfficeData = () => {
    fetch('data/boxoffice.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(movieList => {
        this.setState({
          movieInformationList: [
            ...this.state.movieInformationList,
            movieList.MESSAGE[0],
          ],
        });
      });
  };

  getNetflixData = () => {
    fetch('data/netflix.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(movieList => {
        this.setState({
          movieInformationList: [
            ...this.state.movieInformationList,
            movieList.MESSAGE[0],
          ],
        });
      });
  };

  getWatchaData = () => {
    fetch('data/watcha.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(movieList => {
        this.setState({
          movieInformationList: [
            ...this.state.movieInformationList,
            movieList.MESSAGE[0],
          ],
        });
      });
  };

  componentDidMount() {
    this.getBoxOfficeData();
    this.getNetflixData();
    this.getWatchaData();
  }

  render() {
    console.log(this.props);
    return (
      <>
        {this.state.movieInformationList && (
          <section className="main">
            {this.state.movieInformationList.map(
              (listElement, movieTitleindex) => {
                return (
                  <MainSection
                    goToDetailPage={this.goToDetailPage}
                    movieInformationList={listElement}
                    movieTitleIndex={movieTitleindex}
                  />
                );
              }
            )}
          </section>
        )}
      </>
    );
  }
}

export default withRouter(Main);
