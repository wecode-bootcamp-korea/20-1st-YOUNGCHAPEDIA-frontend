import React, { Component } from 'react';
import './SingleStar.scss';

export default class SingleStar extends Component {
  render() {
    const { nthStar, rating, id, clickStar, hoverStar, starRef } = this.props;
    return (
      <div
        ref={starRef}
        className="blankStar"
        id={id}
        onMouseMove={hoverStar}
        onClick={clickStar}
      >
        {nthStar - rating === 0.5 && <span className="halfStar" id={id} />}
        {nthStar <= rating && <span className="fullStar" id={id} />}
      </div>
    );
  }
}
