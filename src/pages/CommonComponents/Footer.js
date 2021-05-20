import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Modal from './Modal';
import EasterEgg from './EasterEgg';
import './Footer.scss';

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      modalOpened: false,
    };
  }

  closeModal = () => {
    this.setState({
      modalOpened: false,
    });
  };

  handleEasterEgg = () => {
    this.setState({
      modalOpened: true,
    });
  };

  render() {
    const currentPage = this.props.location.pathname;
    if (currentPage === '/review' || currentPage === '/mytest') return null;
    return (
      <>
        {this.state.modalOpened && (
          <Modal closeModal={this.closeModal} childComponent={<EasterEgg />} />
        )}
        <footer className="commonFooter">
          <section className="evaluationFooter">
            <span>
              지금까지{' '}
              <span onClick={this.handleEasterEgg} className="footerCounter">
                얼마
              </span>
              의 평가
            </span>
          </section>
          <section className="descriptionFooter">
            <div className="siteDescription">
              <ul>
                <li>
                  <span>이 사이트는 공식 왓챠 사이트가 아닙니다</span>
                </li>
                <li>
                  <span>이 사이트는 공식 왓챠 사이트와 관련이 없습니다</span>
                </li>
                <li>
                  <span>
                    이 사이트는 학생들이 공부용으로 만든 클론 프로젝트
                    사이트입니다
                  </span>
                </li>
              </ul>
            </div>
            <div className="memberDescription">
              <ul>
                {MEMBER_LIST.map(member => {
                  return (
                    <li key={member.id}>
                      <button>
                        <a href={member.blog} target="_blank">
                          <span>{member.name}</span>
                        </a>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </footer>
      </>
    );
  }
}

export default withRouter(Footer);

const MEMBER_LIST = [
  { id: 1, name: '임유진', blog: 'https://velog.io/@1703979' },
  { id: 2, name: '전용민', blog: 'https://velog.io/@dydalsdl1414' },
  { id: 3, name: '이다슬', blog: 'https://velog.io/@_seeul' },
  { id: 4, name: '김하민', blog: 'https://github.com/HaMin-Kim' },
  { id: 5, name: '최대환', blog: 'https://github.com/Dae-Hwan' },
];
