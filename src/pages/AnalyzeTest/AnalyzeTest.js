import React, { Component } from 'react';
import AnalyzeCardLayout from './Component/AnalyzeCardLayout';
import AnalyzeFavorite from './Component/AnalyzeFavorite';
import AnalyzeStarRate from './Component/AnalyzeStarRate';
import API_URLS from '../../config';
import './AnalyzeTest.scss';

export default class AnalyzeTest extends Component {
  constructor() {
    super();
    this.state = {
      favGenreDatas: [],
      starRateDatas: [],
    };
  }

  componentDidMount() {
    let token = localStorage.getItem('TOKEN');
    fetch(API_URLS['MYTEST_STAR'], {
      headers: {
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          starRateDatas: [data.result],
        })
      )
      .catch(error => alert('별점 받아오기 실패'));

    fetch(API_URLS['MYTEST_GENRE'], {
      headers: {
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          favGenreDatas: [data['favorite_genre']],
        });
      })
      .catch(error => alert('장르 받아오기 실패'));
  }

  render() {
    const { favGenreDatas, starRateDatas } = this.state;
    const userName = localStorage.getItem('NAME');
    return (
      <section className="analyzeTestPage">
        <header className="analyzeHeader">
          <div>
            <span>YOUNGCHA</span>PEDIA
          </div>
          <p>취향분석</p>
          <div>
            <i className="fas fa-user-circle analyzeProfileImg" />
            <span>{userName}</span>
          </div>
        </header>
        <AnalyzeCardLayout
          childComponent={<AnalyzeStarRate starRateDatas={starRateDatas} />}
          favTitle={1}
        />
        <AnalyzeCardLayout
          childComponent={<AnalyzeFavorite favGenreDatas={favGenreDatas} />}
          favTitle={2}
        />
      </section>
    );
  }
}
