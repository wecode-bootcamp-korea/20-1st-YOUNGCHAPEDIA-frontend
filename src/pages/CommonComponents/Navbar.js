import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Navbar.scss';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserLogin: false,
    };
  }
  render() {
    const { isUserLogin } = this.state;
    return (
      <nav className="topNav">
        <span className="logoMenu">
          <header>
            <Link to="/">
              <h1>
                <span>YOUNGCHA</span>
                <span>PEDIA</span>
              </h1>
            </Link>
          </header>
          <ul className="navMenu">
            <li>영화</li>
          </ul>
        </span>
        <span className="searchUser">
          <label className="navSearch">
            <FontAwesomeIcon icon={faSearch} className="topNavIcon" />
            <input placeholder="작품 제목, 배우, 감독을 검색해보세요" />
          </label>
          <button className={`navLoginBtn ${isUserLogin && 'topNavHidden'}`}>
            로그인
          </button>
          <button className={`navLogoutBtn ${isUserLogin || 'topNavHidden'}`}>
            로그아웃
          </button>
          <button className={`navSignInBtn ${isUserLogin && 'topNavHidden'}`}>
            회원가입
          </button>
          <button className={isUserLogin || 'topNavHidden'}>
            <div className="navUserProfile"></div>
          </button>
        </span>
      </nav>
    );
  }
}
