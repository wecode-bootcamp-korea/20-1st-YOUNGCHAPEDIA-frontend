import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Login-SignIn.scss';
export default class Login extends Component {
  constructor(props) {
    super(props);
    //css 확인용
    this.state = {
      wrong: true,
    };
  }
  render() {
    const { wrong } = this.state;
    return (
      <>
        <div className="loginSignInModal">
          <header>
            <h1>
              <span>YOUGNCHA</span>
              <span>PEDIA</span>
            </h1>
          </header>
          <h2>로그인</h2>
          <form>
            <div className={`inputDiv ${wrong && 'warningInputDiv'}`}>
              <label className={`inputLabel ${wrong && 'warningLabel'}`}>
                <input
                  placeholder="이메일"
                  type="email"
                  className={wrong && 'warningInput'}
                />
                <button className={`deleteBtnHidden ${wrong && 'deleteBtn'}`}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
                <span className={`warningIconHidden ${wrong && 'warningIcon'}`}>
                  !
                </span>
              </label>
              <p className={wrong && 'warningText'}>
                정확하지 않은 이메일입니다.
              </p>
            </div>
            <div className={`inputDiv ${wrong && 'warningInputDiv'}`}>
              <label className={`inputLabel ${wrong && 'warningLabel'}`}>
                <input
                  placeholder="비밀번호"
                  type="password"
                  className={wrong && 'warningInput'}
                />
                <button className={`deleteBtnHidden ${wrong && 'deleteBtn'}`}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
                <span className={`warningIconHidden ${wrong && 'warningIcon'}`}>
                  !
                </span>
              </label>
              <p className={wrong && 'warningText'}>
                비밀번호는 영문, 숫자, 특수문자 중 2개 이상을 조합하여 최소
                10자리 이상이어야 합니다.
              </p>
            </div>
            <button className="loginSignInBtn">로그인</button>
            <p className="lostPassword">비밀번호를 잊어버리셨나요?</p>
            <p className="suggestSignIn">
              계정이 없으신가요?<a className="signInLink">회원가입</a>
            </p>
          </form>
        </div>
      </>
    );
  }
}
