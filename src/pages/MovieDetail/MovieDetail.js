import React from 'react';
import MovieBannerSection from './Components/MovieBannerSection/MovieBannerSection';
import LeaveCommentSection from './Components/LeaveCommentSection/LeaveCommentSection';
import MovieDetailContentsSection from './Components/MovieDetailContentsSection/MovieDetailContentsSection';

import './MovieDetail.scss';

export default class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movieInformation: {} };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`http://10.58.5.25:8000/movies/${id}`)
      .then(res => res.json())
      .then(res => this.setState({ movieInformation: res }));
  }

  render() {
    console.log(this.props.match.params.id);
    const { movieInformation } = this.state;
    console.log(movieInformation);

    return (
      <main className="MovieDetail">
        <MovieBannerSection movieInformation={movieInformation} />
        <LeaveCommentSection />
        <MovieDetailContentsSection />
      </main>
    );
  }
}
