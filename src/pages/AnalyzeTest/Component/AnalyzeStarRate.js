import React, { Component } from 'react';
import './AnalyzeStarRate.scss';

export default class AnalyzeStarRate extends Component {
  render() {
    const { starRateDatas } = this.props;
    const starY = [];
    starRateDatas[0]?.['star_distribution'].forEach(el =>
      starY.push(...Object.values(el))
    );

    return (
      <>
        {starRateDatas[0] && (
          <>
            <div className="analyzeStarChart">
              <div className="starGraphs">
                {starY.map((nthY, nthX) =>
                  STAR_GRADE[nthX + 1] ===
                  starRateDatas[0]['rating_highest'] ? (
                    <div
                      style={{ height: nthY * 5, backgroundColor: '#FCA137' }}
                      className="starGraph"
                    />
                  ) : (
                    <div style={{ height: nthY * 5 }} className="starGraph" />
                  )
                )}
              </div>
              <div className="starGraphsLabel">
                {STAR_GRAPH_COUNT.map(index =>
                  Number.isInteger(index / 2) ? (
                    <span key={index / 2}>{index / 2}</span>
                  ) : null
                )}
              </div>
            </div>
            <ul className="topResults">
              <li className="resultRow">
                {starRateDatas[0]['rating_average'].toFixed(2)}
                <span>별점 평균</span>
              </li>
              <li className="resultRow">
                {starRateDatas[0]['rating_count']}
                <span>별점 개수</span>
              </li>
              <li className="resultRow">
                {starRateDatas[0]['rating_highest']}
                <span>많이 준 별점</span>
              </li>
            </ul>
          </>
        )}
      </>
    );
  }
}

const STAR_GRADE = {
  1: 0.5,
  2: 1.0,
  3: 1.5,
  4: 2.0,
  5: 2.5,
  6: 3.0,
  7: 3.5,
  8: 4.0,
  9: 4.5,
  10: 5.0,
};

const STAR_GRAPH_COUNT = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
