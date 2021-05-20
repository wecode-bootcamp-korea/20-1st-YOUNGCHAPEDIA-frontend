import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import API_URLS from '../../config';
import ModalLogoLayout from '../CommonComponents/ModalLogoLayout';
import './LoginSignInForm.scss';

class LoginSignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
      name: '',
      isOnceBlured: false,
    };
  }

  requestLogin = e => {
    e.preventDefault();
    fetch(API_URLS.LOGIN, {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then(res => {
        if (res.status === 200) {
          return res.json();
        }
        if (res.status === 400) {
          alert('아이디는 nini@gmail.com 비밀번호는 12345678a@입니다');
        }
      })
      .then(res => {
        if (res) {
          localStorage.setItem('TOKEN', res.token);
          this.props.checkUserLogined();
          this.props.history.push('/review');
        } else {
          alert('로그인 하세요');
        }
      });
  };

  requestSignIn = e => {
    e.preventDefault();
    fetch(API_URLS.SIGNUP, {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then(res => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then(res => {
        if (res) {
          localStorage.setItem('TOKEN', res.token);
          this.props.checkUserLogined();
          this.props.closeModal();
          alert('회원가입 성공');
        }
      })
      .catch(error => {
        alert(error);
      });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleDeleteBtn = e => {
    e.preventDefault();
    this.setState({
      [e.currentTarget.previousSibling.name]: '',
    });
  };

  checkIdValid = () => {
    const { id } = this.state;
    if (id) {
      const checkIdCondition =
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      return checkIdCondition.test(id);
    }
  };

  checkPwValid = () => {
    const { pw } = this.state;
    if (pw) {
      const checkChars = /(?=.*[A-Za-z])/;
      const checkNums = /(?=.*\d)/;
      const checkMarks = /(?=.*[$@$!%*#?&])/;
      const checkCounts = /^[A-Za-z\d$@$!%*#?&]{10,}$/;
      return (
        checkCounts.test(pw) &&
        [checkChars.test(pw), checkNums.test(pw), checkMarks.test(pw)].filter(
          Boolean
        ).length >= 2
      );
    }
  };

  checkNameValid = () => {
    const { name } = this.state;
    if (name) {
      return name.length > 1;
    }
  };

  handleBlur = () => {
    this.setState({
      isOnceBlured: true,
    });
  };

  render() {
    const { id, pw, name, isOnceBlured } = this.state;
    //default : LoginBtn 클릭했을 때 (false)
    const { isSignBtnClicked, goToLoginModal, goToSignInModal } = this.props;
    const {
      handleInput,
      requestLogin,
      requestSignIn,
      handleDeleteBtn,
      checkIdValid,
      checkPwValid,
      checkNameValid,
    } = this;

    const isIdValid = isOnceBlured ? checkIdValid() : undefined;
    const isPwValid = isOnceBlured ? checkPwValid() : undefined;
    const isNameValid = isOnceBlured ? checkNameValid() : undefined;
    const isIdPwBothValid = isIdValid && isPwValid;
    const isInfoAllValid = isIdValid && isPwValid && isNameValid;

    return (
      <ModalLogoLayout>
        {isSignBtnClicked ? (
          <h2 className="formHeader">회원가입</h2>
        ) : (
          <h2 className="formHeader">로그인</h2>
        )}
        <form className="form">
          {isSignBtnClicked && (
            <div
              className={`inputDiv ${
                isNameValid === false && 'warningInputDiv'
              }`}
            >
              <label
                className={`inputLabel ${
                  isNameValid === false && 'warningLabel'
                }`}
              >
                <input
                  placeholder="이름"
                  type="text"
                  name="name"
                  className={isNameValid === false && 'warningInput'}
                  onChange={handleInput}
                  value={name}
                />
                {isNameValid === false && (
                  <>
                    <button className="deleteBtn" onClick={handleDeleteBtn}>
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <span className="warningIcon">!</span>
                  </>
                )}
              </label>
              {isNameValid === false && (
                <p className="warningText">정확하지 않은 이름입니다.</p>
              )}
            </div>
          )}
          <div
            className={`inputDiv ${isIdValid === false && 'warningInputDiv'}`}
          >
            <label
              className={`inputLabel ${isIdValid === false && 'warningLabel'}`}
            >
              <input
                placeholder="이메일"
                type="text"
                name="id"
                className={isIdValid === false && 'warningInput'}
                onChange={handleInput}
                onBlur={this.handleBlur}
                value={id}
              />
              {isIdValid === false && (
                <>
                  <button className="deleteBtn" onClick={handleDeleteBtn}>
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                  <span className="warningIcon">!</span>
                </>
              )}
            </label>
            {isIdValid === false && (
              <p className="warningText">정확하지 않은 이메일입니다.</p>
            )}
          </div>
          <div
            className={`inputDiv ${isPwValid === false && 'warningInputDiv'}`}
          >
            <label
              className={`inputLabel ${isPwValid === false && 'warningLabel'}`}
            >
              <input
                placeholder="비밀번호"
                type="password"
                name="pw"
                className={isPwValid === false && 'warningInput'}
                onChange={handleInput}
                value={pw}
              />
              {isPwValid === false && (
                <>
                  <button className="deleteBtn" onClick={handleDeleteBtn}>
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                  <span className="warningIcon">!</span>
                </>
              )}
            </label>
            {isPwValid === false && (
              <p className="warningText">
                비밀번호는 영문, 숫자, 특수문자 중 2개 이상을 조합하여 최소
                10자리 이상이어야 합니다.
              </p>
            )}
          </div>
          {isSignBtnClicked ? (
            <button
              className="loginSignInBtn"
              disabled={!isInfoAllValid}
              onClick={requestSignIn}
            >
              회원가입
            </button>
          ) : (
            <button
              className="loginSignInBtn"
              disabled={!isIdPwBothValid}
              onClick={requestLogin}
            >
              로그인
            </button>
          )}
        </form>
        {isSignBtnClicked ? (
          <p className="suggestSignIn suggestLogin">
            이미 가입하셨나요?
            <span className="loginSignInLink" onClick={goToLoginModal}>
              로그인
            </span>
          </p>
        ) : (
          <>
            <p className="lostPassword">비밀번호를 잊어버리셨나요?</p>
            <p className="suggestSignIn">
              계정이 없으신가요?
              <span className="loginSignInLink" onClick={goToSignInModal}>
                회원가입
              </span>
            </p>
          </>
        )}
      </ModalLogoLayout>
    );
  }
}

export default withRouter(LoginSignInForm);
