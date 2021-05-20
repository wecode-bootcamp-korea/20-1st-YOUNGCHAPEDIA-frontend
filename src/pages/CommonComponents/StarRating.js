import React, { Component, createRef } from 'react';
import SingleStar from './SingleStar';
import API_URLS from '../../config';
import './StarRating.scss';

export default class StarRating extends Component {
  constructor() {
    super();
    this.state = { rating: 0 };
    this.starRef = createRef();
  }

  // ToDo : 상세페이지에서의 별점
  // getStarRating = () => {
  //   fetch(API, {
  //     headers: {
  //       Authorization: token,
  //     },
  //   }).then(res => {
  //     //상세페이지에서 유저가 해당 영화에 별점을 부여했다면 그 별점 가져오는 코드
  //   });
  // };

  clickStar = e => {
    const starX = e.nativeEvent.offsetX;
    const starWidth = this.starRef.current.offsetWidth;
    let postStarRating;
    if (starWidth * 0.5 < starX) {
      postStarRating = parseInt(e.target.id);
      this.setState({
        rating: parseInt(e.target.id),
      });
    }
    if (starX < starWidth * 0.5) {
      postStarRating = parseInt(e.target.id) - 0.5;
      this.setState({
        rating: e.target.id - 0.5,
      });
    }

    let token = localStorage.getItem('TOKEN');

    fetch(API_URLS.REVIEW, {
      method: 'POST',
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({
        movie: this.props.id,
        rating: postStarRating,
      }),
    }).then(this.props.updateRatingCount());
  };

  hoverStar = e => {
    const starX = e.nativeEvent.offsetX;
    const starWidth = this.starRef.current.offsetWidth;

    if (starWidth * 0.5 < starX) {
      this.setState({
        rating: parseInt(e.target.id),
      });
    }
    if (starX < starWidth * 0.5) {
      this.setState({
        rating: e.target.id - 0.5,
      });
    }
  };

  render() {
    return (
      <div className="starContainer">
        {new Array(5).fill(0).map((el, index) => (
          <SingleStar
            starRef={this.starRef}
            id={index + 1}
            clickStar={this.clickStar}
            nthStar={index + 1}
            rating={this.state.rating}
            hoverStar={this.hoverStar}
          />
        ))}
      </div>
    );
  }
}
