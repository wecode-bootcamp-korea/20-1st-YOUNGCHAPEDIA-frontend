import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import API_URLS from '../../config';
import './Login-SignIn.scss';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
      name: '',
      hidden: false,
    };
  }

  componentDidMount() {
    window.addEventListener('click', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.closeModal);
  }

  closeModal = e => {
    if (e.target === document.body) {
      this.setState({ hidden: true });
    }
  };

  requestSignIn = e => {
    e.preventDefault();
    fetch(API_URLS.SIGNUP, {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
        name: this.state.name,
      }),
    })
      .then(res => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then(res => {
        if (res) {
          // save localstroage
          // localStorage.setItem('TOKEN', res['ACCESS TOKEN']);
          // push to main
          // this.props.history.push('/');
        } else {
          alert('로그인 하세요');
        }
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
    let isIdValid = true;
    if (id) {
      const checkIdCondition =
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      isIdValid = checkIdCondition.test(id);
      return isIdValid;
    } else return isIdValid;
  };

  checkPwValid = () => {
    const { pw } = this.state;
    let isPwValid = true;
    if (pw) {
      const checkChars = /(?=.*[A-Za-z])/;
      const checkNums = /(?=.*\d)/;
      const checkMarks = /(?=.*[$@$!%*#?&])/;
      const checkCounts = /^[A-Za-z\d$@$!%*#?&]{10,}$/;
      isPwValid =
        checkCounts.test(pw) &&
        [checkChars.test(pw), checkNums.test(pw), checkMarks.test(pw)].filter(
          Boolean
        ).length >= 2;
      return isPwValid;
    } else return isPwValid;
  };

  checkNameValid = () => {
    const { name } = this.state;
    let isNameValid = true;
    if (name) {
      isNameValid = name.length > 1;
      return isNameValid;
    } else return isNameValid;
  };

  render() {
    const { id, pw, name, hidden } = this.state;
    const {
      handleInput,
      requestSignIn,
      handleDeleteBtn,
      checkIdValid,
      checkPwValid,
      checkNameValid,
    } = this;
    const isIdValid = checkIdValid();
    const isPwValid = checkPwValid();
    const isNameValid = checkNameValid();
    const isInfoAllValid =
      isIdValid && isPwValid && isNameValid && id && pw && name;

    return (
      <>
        <div
          className={`loginSignInModal ${hidden && 'loginSignInModalHidden'}`}
        >
          <header>
            <h1>
              <span>YOUGNCHA</span>
              <span>PEDIA</span>
            </h1>
          </header>
          <h2>회원가입</h2>
          <form>
            <div className={`inputDiv ${isNameValid || 'warningInputDiv'}`}>
              <label className={`inputLabel ${isNameValid || 'warningLabel'}`}>
                <input
                  placeholder="이름"
                  type="text"
                  name="name"
                  className={isNameValid || 'warningInput'}
                  onChange={handleInput}
                  value={name}
                />
                <button
                  className={`deleteBtnHidden ${isNameValid || 'deleteBtn'}`}
                  onClick={handleDeleteBtn}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
                <span
                  className={`warningIconHidden ${
                    isNameValid || 'warningIcon'
                  }`}
                >
                  !
                </span>
              </label>
              <p className={isNameValid || 'warningText'}>
                정확하지 않은 이름입니다.
              </p>
            </div>
            <div className={`inputDiv ${isIdValid || 'warningInputDiv'}`}>
              <label className={`inputLabel ${isIdValid || 'warningLabel'}`}>
                <input
                  placeholder="이메일"
                  type="email"
                  name="id"
                  className={isIdValid || 'warningInput'}
                  onChange={handleInput}
                  value={id}
                />
                <button
                  className={`deleteBtnHidden ${isIdValid || 'deleteBtn'}`}
                  onClick={handleDeleteBtn}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
                <span
                  className={`warningIconHidden ${isIdValid || 'warningIcon'}`}
                >
                  !
                </span>
              </label>
              <p className={isIdValid || 'warningText'}>
                정확하지 않은 이메일입니다.
              </p>
            </div>
            <div className={`inputDiv ${isPwValid || 'warningInputDiv'}`}>
              <label className={`inputLabel ${isPwValid || 'warningLabel'}`}>
                <input
                  placeholder="비밀번호"
                  type="password"
                  name="pw"
                  className={isPwValid || 'warningInput'}
                  onChange={handleInput}
                  value={pw}
                />
                <button
                  className={`deleteBtnHidden ${isPwValid || 'deleteBtn'}`}
                  onClick={handleDeleteBtn}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
                <span
                  className={`warningIconHidden ${isPwValid || 'warningIcon'}`}
                >
                  !
                </span>
              </label>
              <p className={isPwValid || 'warningText'}>
                비밀번호는 영문, 숫자, 특수문자 중 2개 이상을 조합하여 최소
                10자리 이상이어야 합니다.
              </p>
            </div>
            <button
              className="loginSignInBtn"
              disabled={!isInfoAllValid}
              onClick={requestSignIn}
            >
              회원가입
            </button>
            <p className="suggestSignIn suggestLogin">
              이미 가입하셨나요?<span className="loginSignInLink">로그인</span>
            </p>
          </form>
        </div>
        <div
          className={`loginSignModalBg ${hidden && 'loginSignInModalHidden'}`}
        />
      </>
    );
  }
}
