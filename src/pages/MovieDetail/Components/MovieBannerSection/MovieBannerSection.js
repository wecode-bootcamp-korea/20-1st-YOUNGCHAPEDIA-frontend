import React from 'react';
import './MovieBannerSection.scss';

export default class MovieBannerSection extends React.Component {
  render() {
    const { movieInformation } = this.props;
    return (
      <>
        {movieInformation && (
          <section className="MovieBannerSection">
            <div className="movieBannerPoster">
              <img
                alt="stillCut"
                src={movieInformation.movie_information.background_img}
                className="stillCut"
              />
            </div>
            <div className="movieSimpleInformation">
              <div className="movieSimpleInformationContents">
                <img alt="poster" src={movieInformation.thumbnail_img} />
                <div className="movieBookRating">예매 순위: 2위</div>
                <div className="movieSubject">
                  <h1>분노의 질주: 더 얼티메이트</h1>
                  <div className="movieGenre">
                    2020 &middot; 스릴러 &middot; 미국
                  </div>
                  <div className="averageOfStarPoint">
                    평균 <i class="fas fa-star"></i> 3.8(192명)
                  </div>
                  <div className="wishAndStarPoint">
                    <button className="wishButton">
                      <i class="fas fa-plus"></i> 보고싶어요
                    </button>
                    <div className="giveStarPoint">
                      <div>평가하기</div>
                      <div>
                        <i class="far fa-star" />
                        <i class="far fa-star" />
                        <i class="far fa-star" />
                        <i class="far fa-star" />
                        <i class="far fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </>
    );
  }
}
