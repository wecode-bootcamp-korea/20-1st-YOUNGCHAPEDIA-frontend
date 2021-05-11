import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import API_URLS from '../../config';
import './Login-SignIn.scss';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
      hidden: false,
      isIdValid: true,
      isPwValid: true,
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

  requestLogin = e => {
    e.preventDefault();
    fetch(API_URLS.SIGNIN, {
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
      })
      .then(res => {
        if (res) {
          // save localstroage
          // localStorage.setItem('TOKEN', res.token);
          // push to main
          // this.props.history.push('/');
        } else {
          alert('로그인 하세요');
        }
      });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        if (name === 'id') {
          this.checkIdValid();
        }
        if (name === 'pw') {
          this.checkPwValid();
        }
      }
    );
  };

  handleDeleteBtn = e => {
    e.preventDefault();
    this.setState({
      [e.currentTarget.previousSibling.name]: '',
    });
  };

  checkIdValid = () => {
    const { id } = this.state;
    const checkIdCondition =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    const isIdValid = checkIdCondition.test(id);
    this.setState({
      isIdValid,
    });
  };

  checkPwValid = () => {
    const { pw } = this.state;
    const checkChars = /(?=.*[A-Za-z])/;
    const checkNums = /(?=.*\d)/;
    const checkMarks = /(?=.*[$@$!%*#?&])/;
    const checkCounts = /^[A-Za-z\d$@$!%*#?&]{10,}$/;
    const isPwValid =
      checkCounts.test(pw) &&
      [checkChars.test(pw), checkNums.test(pw), checkMarks.test(pw)].filter(
        Boolean
      ).length >= 2;

    this.setState({
      isPwValid,
    });
  };

  render() {
    const { id, pw, hidden, isIdValid, isPwValid } = this.state;
    const { handleInput, requestLogin, handleDeleteBtn } = this;
    const isIdPwBothValid = isIdValid && isPwValid && id && pw;
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
          <h2>로그인</h2>
          <form>
            <div className={`inputDiv ${isIdValid || 'warningInputDiv'}`}>
              <label className={`inputLabel ${isIdValid || 'warningLabel'}`}>
                <input
                  placeholder="이메일"
                  type="text"
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
              disabled={!isIdPwBothValid}
              onClick={requestLogin}
            >
              로그인
            </button>
            <p className="lostPassword">비밀번호를 잊어버리셨나요?</p>
            <p className="suggestSignIn">
              계정이 없으신가요?
              <span className="loginSignInLink">회원가입</span>
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
