import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import API_URLS from '../../config';
import './MyPage.scss';

class MyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
    };
  }

  componentDidMount() {
    let token = localStorage.getItem('TOKEN');
    fetch(API_URLS.MYPAGE, {
      headers: {
        Authorization: token,
      },
    })
      .then(res => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .catch(error => {
        alert('로그인해주세요');
        this.props.history.push('/');
      })
      .then(userRatedData => {
        localStorage.setItem('NAME', userRatedData.result.name);
        this.setState({
          userData: userRatedData.result,
        });
      });
  }

  goToMyTest = () => {
    this.props.history.push('/mytest');
  };

  render() {
    const { userData } = this.state || '';
    return (
      <section className="myPageSection">
        <div className="myPageContainer">
          <header className="myHeader">
            <div className="myHeaderShadow" />
            <button>
              <i class="fas fa-cog" />
            </button>
          </header>
          <div className="myContents">
            <header className="myProfile">
              <div className="myProfileColumn">
                <i className="fas fa-user-circle myPageProfileImg" />
              </div>
              <div className="myProfileColumn">
                <h1>{userData.name}</h1>
              </div>
              <div className="myProfileColumn">
                <h6>프로필이 없습니다.</h6>
              </div>
            </header>
            <div className="analyzeTest">
              <div>
                <button onClick={this.goToMyTest} className="analyzeBtn">
                  <i class="fas fa-chart-bar" />
                  취향분석
                </button>
              </div>
            </div>
            <div className="contentBanners">
              <button className="myMovies">
                <p className="contentBannersColumn">영화</p>
                <p className="contentBannersColumn">
                  <span>★</span>
                  <span>{userData['rating_count']}</span>
                </p>
                <p className="contentBannersColumn">
                  <span>보고싶어요</span>
                  <span className="myPageWantedCount">
                    {userData['wish_count']}
                  </span>
                </p>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(MyPage);
