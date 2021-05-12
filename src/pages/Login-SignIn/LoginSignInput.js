import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Login-SignIn.scss';

export default class LoginSignInput extends Component {
  render() {
    const {
      type,
      text,
      data,
      handleInput,
      handleDeleteBtn,
      isIdValid,
      isPwValid,
      id,
      pw,
    } = this.props;

    return (
      <>
        <div className={`inputDiv ${isIdValid || 'warningInputDiv'}`}>
          <label className={`inputLabel ${isIdValid || 'warningLabel'}`}>
            <input
              placeholder={data.placeholder}
              type={type}
              name={data.name}
              className={isIdValid || 'warningInput'}
              onChange={handleInput}
              value={id}
            />
            <button
              className={`hidden ${isIdValid || 'deleteBtn'}`}
              onClick={handleDeleteBtn}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <span className={`hidden ${isIdValid || 'warningIcon'}`}>!</span>
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
              className={`hidden ${isPwValid || 'deleteBtn'}`}
              onClick={handleDeleteBtn}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <span className={`hidden ${isPwValid || 'warningIcon'}`}>!</span>
          </label>
          <p className={isPwValid || 'warningText'}>
            비밀번호는 영문, 숫자, 특수문자 중 2개 이상을 조합하여 최소 10자리
            이상이어야 합니다.
          </p>
        </div>
      </>
    );
  }
}
