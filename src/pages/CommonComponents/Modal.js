import React, { Component, createRef } from 'react';
import { withRouter } from 'react-router-dom';
import './Modal.scss';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.modalRef = createRef();
  }

  componentDidMount() {
    document.body.style.overflow = 'hidden';
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.props.closeModal();
    }
  }

  componentWillUnmount() {
    document.body.style.overflow = 'auto';
  }

  closeModal = e => {
    if (!this.modalRef.current.contains(e.target)) this.props.closeModal();
  };

  render() {
    return (
      <>
        <div className="modalContainer">
          <div ref={this.modalRef} className="modal">
            {this.props.childComponent}
          </div>
          <div className="modalBackground" onClick={this.closeModal} />
        </div>
      </>
    );
  }
}

export default withRouter(Modal);

/*
------------
How To Use
------------
1. 모달창을 실행할 부모 컴포넌트 안에 closeModal 메소드를 작성해주세요
  closeModal = () => {
    this.setState({
      설정하신 state 이름: false,
    });
  };
ex.<Modal
      closeModal={closeModal}
    />
  
------------
2. Modal 안에 넣을 컴포넌트를 부모 컴포넌트에서 전달해주세요. props 이름은 childComponent입니다.
ex.<Modal
      childComponent={<LoginSignInForm />}
    />
------------
*/
