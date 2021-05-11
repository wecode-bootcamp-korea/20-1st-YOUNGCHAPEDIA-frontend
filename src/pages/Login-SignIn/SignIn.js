import React, { Component, createRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Login-SignIn.scss';
export default class SignIn extends Component {
  constructor(props) {
    super(props);
    //css 확인용
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
    // const isModalClicked = true;
    if (e.target === document.body) {
      console.log(true);
      this.setState({ hidden: true });
    }
  };

  requestSignIn = e => {
    // e.preventDefault();
    //   fetch(API_URLS.LOGIN, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       email: this.state.id,
    //       password: this.state.pw,
    //     }),
    //   })
    //     .then(res => {
    //       if (res.status === 200) {
    //         return res.json();
    //       }
    //     })
    //     .then(res => {
    //       if (res) {
    //         // save localstroage
    //         localStorage.setItem('TOKEN', res['ACCESS TOKEN']);
    //         // push to main
    //         this.props.history.push('/');
    //       } else {
    //         alert('로그인 하세요');
    //       }
    //     });
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

  render() {
    const { id, pw, name, hidden } = this.state;
    const { handleInput, requestSignIn, handleDeleteBtn } = this;
    const checkChars = /(?=.*[A-Za-z])/;
    const checkNums = /(?=.*\d)/;
    const checkMarks = /(?=.*[$@$!%*#?&])/;
    const checkCounts = /^[A-Za-z\d$@$!%*#?&]{10,}$/;
    const checkIdCondition =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const isIdValid = checkIdCondition.test(id);
    const isPwValid =
      checkCounts.test(pw) &&
      [checkChars.test(pw), checkNums.test(pw), checkMarks.test(pw)].filter(
        Boolean
      ).length >= 2;
    const isNameValid = name.length > 1;
    const isInfoAllValid = isIdValid && isPwValid && isNameValid;
    console.log(id, pw, name);

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
              {/* <p className={isNameValid || 'warningText'}>
                이름을 입력해주셔야 합니다.
              </p> */}
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
              이미 가입하셨나요?<a className="loginSignInLink">로그인</a>
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
