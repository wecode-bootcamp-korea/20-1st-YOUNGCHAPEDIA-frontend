import React, { Component, createRef } from 'react';
import LoginSignForm from '../Login-SignIn/LoginSignForm';
import './Modal.scss';

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalCloseClicked: false,
    };
    this.modalRef = createRef();
  }

  componentDidMount() {
    window.addEventListener('click', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.closeModal);
  }

  closeModal = e => {
    const test = e.target === this.modalRef.current;
    if (test) {
      this.setState({
        modalCloseClicked: true,
      });
    }
  };

  render() {
    const { modalCloseClicked } = this.state;
    const { isLoginClicked } = this.props;
    console.log(isLoginClicked);
    return (
      <>
        <div
          className={`loginSignInModalContainer ${
            isLoginClicked ? '' : 'hidden'
          } ${modalCloseClicked ? 'hidden' : ''}`}
        >
          <div className="loginSignInModal">
            <LoginSignForm type="login" text="로그인" data={loginData} />
          </div>
          <div
            ref={this.modalRef}
            className="loginSignModalBg"
            onClick={this.closeModal}
          />
        </div>

        {/* 회원가입 */}
        {/* <div className="loginSignInModalContainer">
          <div className={`loginSignInModal ${isSignInClicked && 'hidden'}`}>
            <LoginSignForm type="login" text="로그인" data={signInData} />
          </div>
          <div
            ref={this.modalRef}
            className={`loginSignModalBg ${
              (isLoginClicked || isSignInClicked) && 'hidden'
            }`}
          />
        </div> */}
      </>
    );
  }
}

const loginData = [
  {
    type: 'email',
    name: 'id',
    placeholder: '이메일',
  },
  {
    type: 'password',
    name: 'pw',
    placeholder: '비밀번호',
  },
];

const signInData = [
  {
    type: 'email',
    name: 'id',
    placeholder: '이메일',
  },
  {
    type: 'password',
    name: 'pw',
    placeholder: '비밀번호',
  },
  {
    type: 'text',
    name: 'name',
    placeholder: '이름',
  },
];
