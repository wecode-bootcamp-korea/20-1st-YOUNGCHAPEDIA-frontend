import React, { Component } from 'react';
import './AnalyzeFavorite.scss';

export default class AnalyzeFavorite extends Component {
  render() {
    const { favGenreDatas } = this.props;
    return (
      <>
        <ul className="topResults">
          {favGenreDatas[0]?.slice(0, 3).map(favData => (
            <li className="resultRow" key={favData.id}>
              {favData.genre || favData.country}
              <span>
                <span>{favData.average}점</span>
                <span>{favData.count}편</span>
              </span>
            </li>
          ))}
        </ul>
        <ul className="resultLists">
          {favGenreDatas[0]?.slice(3).map(favData => (
            <li className="resultList" key={favData.id}>
              {favData.genre || favData.country}
              <span>
                <span>{favData.average}점</span>
                <span>{favData.count}편</span>
              </span>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
