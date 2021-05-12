import React, { Component, createRef } from 'react';
import LoginSignFormLayout from '../Login-SignIn/LoginSignFormLayout';
import LoginSignInput from '../Login-SignIn/LoginSignInput';
import API_URLS from '../../config';
import './Login-SignIn.scss';

export default class LoginSignForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
    };
    this.modalRef = createRef();
  }

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
          // ToDo: 백엔드 토큰 구현되면 추가할 예정
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
      return (isIdValid = checkIdCondition.test(id));
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
      return (isPwValid =
        checkCounts.test(pw) &&
        [checkChars.test(pw), checkNums.test(pw), checkMarks.test(pw)].filter(
          Boolean
        ).length >= 2);
    } else return isPwValid;
  };

  render() {
    const { type, text, data } = this.props;
    const { id, pw } = this.state;
    const {
      handleInput,
      requestLogin,
      handleDeleteBtn,
      checkIdValid,
      checkPwValid,
    } = this;
    const isIdValid = checkIdValid();
    const isPwValid = checkPwValid();
    const isIdPwBothValid = isIdValid && isPwValid && id && pw;

    return (
      <LoginSignFormLayout>
        <h2>로그인</h2>
        <form className="LoginSignForm">
          {
            (data.map = inputData => {
              return (
                <LoginSignInput
                  type={inputData.type}
                  text={inputData.text}
                  data={inputData.data}
                  handleInput
                  handleDeleteBtn
                  isIdValid
                  isPwValid
                  id
                  pw
                />
              );
            })
          }
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
      </LoginSignFormLayout>
    );
  }
}
