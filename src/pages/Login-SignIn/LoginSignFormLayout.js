import React, { Component } from 'react';
import './Login-SignIn.scss';

export default class LoginSignFormLayout extends Component {
  render() {
    return (
      <>
        <header>
          <h1>
            <span>YOUGNCHA</span>
            <span>PEDIA</span>
          </h1>
        </header>
        {this.props.children}
      </>
    );
  }
}
