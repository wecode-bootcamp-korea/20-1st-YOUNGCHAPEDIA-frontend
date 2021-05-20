import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';
import LoginSignInForm from '../LoginSignIn/LoginSignInForm';
import './Navbar.scss';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserLogined: false,
      isSignBtnClicked: false,
      modalOpened: false,
    };
  }

  checkUserLogined = () => {
    let token = localStorage.getItem('TOKEN');
    if (token) {
      this.setState({
        isUserLogined: true,
      });
    }
  };

  closeModal = () => {
    this.setState({
      modalOpened: false,
    });
  };

  clickSignIn = () => {
    this.setState({
      modalOpened: true,
      isSignBtnClicked: true,
    });
  };

  clickLogin = () => {
    this.setState({
      modalOpened: true,
      isSignBtnClicked: false,
    });
  };

  clickLogout = () => {
    localStorage.removeItem('TOKEN');
    localStorage.removeItem('NAME');
    this.setState({
      isUserLogined: false,
    });
    this.props.history.push('/');
  };

  goToLoginModal = () => {
    this.setState({
      isSignBtnClicked: false,
    });
  };

  goToSignInModal = () => {
    this.setState({
      isSignBtnClicked: true,
    });
  };

  render() {
    const { isUserLogined, isSignBtnClicked, modalOpened } = this.state;
    const {
      closeModal,
      clickSignIn,
      clickLogin,
      clickLogout,
      checkUserLogined,
      goToLoginModal,
      goToSignInModal,
    } = this;
    const logoutedBtn = (
      <>
        <button className="navLoginBtn" onClick={clickLogin}>
          로그인
        </button>
        <button className="navSignInBtn" onClick={clickSignIn}>
          회원가입
        </button>
      </>
    );
    const loginedBtn = (
      <>
        <button className="navLogoutBtn">
          <Link to="/review">평가하기</Link>
        </button>
        <button className="navLogoutBtn" onClick={clickLogout}>
          로그아웃
        </button>
        <button>
          <Link to="/mypage">
            <div className="navUserProfile" />
          </Link>
        </button>
      </>
    );

    return (
      <>
        {modalOpened && (
          <Modal
            closeModal={closeModal}
            childComponent={
              <LoginSignInForm
                closeModal={closeModal}
                checkUserLogined={checkUserLogined}
                isSignBtnClicked={isSignBtnClicked}
                goToLoginModal={goToLoginModal}
                goToSignInModal={goToSignInModal}
              />
            }
          />
        )}
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
            <label className="navSearch" htmlFor="searchInput">
              <FontAwesomeIcon icon={faSearch} className="topNavIcon" />
              <input
                id="searchInput"
                placeholder="작품 제목, 배우, 감독을 검색해보세요"
              />
            </label>
            {isUserLogined ? loginedBtn : logoutedBtn}
          </span>
        </nav>
      </>
    );
  }
}

export default withRouter(Navbar);
