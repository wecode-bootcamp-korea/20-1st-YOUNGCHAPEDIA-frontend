import React from 'react';
import './MovieDetailContentsSection.scss';

export default class MovieDetailContentsSection extends React.Component {
  render() {
    return (
      <section className="MovieDetailContentsSection">
        <div className="movieDetailContents">
          <article className="movieInformation">
            <div className="movieInformationContents">
              <header>
                <h2>기본정보</h2>
                <div>
                  <a>더보기</a>
                </div>
              </header>
              <article>
                <div>
                  <span>F9</span>
                  <br />
                  <span>2020 &middot; 미국 &middot; 스릴러</span>
                  <br />
                  <span>2시간 15분</span>
                </div>
                <p>
                  기다림은 끝났다! 전 세계가 기다려온 단 하나의 액션블록버스터!
                  도미닉(빈 디젤)은 자신과 가장 가까웠던 형제 제이콥(존 시나)이
                  사이퍼(샤를리즈 테론)와 연합해 전 세계를 위기로 빠트릴
                  위험천만한 계획을 세운다는 사실을 알게 되고,...
                </p>
              </article>
            </div>
          </article>
          <article className="comments">
            <div className="commentContents">
              <header>
                <div className="commentSubjectAndCount">
                  <h2>코멘트</h2>
                  <span>20+</span>
                </div>
                <div>
                  <a>더보기</a>
                </div>
              </header>
              <article> 코멘트 컴포넌트가 들어갈 자리입니다.</article>
            </div>
          </article>
          <article className="similarMovie">
            <div className="similarMovieContents">
              <header>
                <h2>비슷한 작품</h2>
              </header>
              <article>비슷한 작품 컴포넌트가 들어갈 자리입니다.</article>
            </div>
          </article>
        </div>
      </section>
    );
  }
}