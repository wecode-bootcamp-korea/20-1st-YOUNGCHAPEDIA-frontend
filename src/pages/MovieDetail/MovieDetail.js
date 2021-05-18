import React from 'react';
import MovieBannerSection from './Components/MovieBannerSection/MovieBannerSection';
import LeaveCommentSection from './Components/LeaveCommentSection/LeaveCommentSection';
import MovieDetailContentsSection from './Components/MovieDetailContentsSection/MovieDetailContentsSection';

import './MovieDetail.scss';

export default class MovieDetail extends React.Component {
  render() {
    console.log(this.props.location);
    return (
      <main className="MovieDetail">
        <MovieBannerSection />
        <LeaveCommentSection />
        <MovieDetailContentsSection />
      </main>
    );
  }
}
