import React, { Component } from 'react';
import MenuList from './MenuList';
import API_URLS from '../../../config';
import './FilterGenreMenu.scss';

export default class FilterGenreMenu extends Component {
  constructor() {
    super();
    this.state = {
      isMenuChecked: false,
      genreMenus: {},
    };
  }

  componentDidMount() {
    fetch(API_URLS.REVIEW_GENRE)
      .then(res => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then(res => this.setState({ genreMenus: res['genre_list'] }));
  }

  clickRandomMenu = () => {
    this.setState({
      isMenuChecked: !this.state.isMenuChecked,
    });
  };

  render() {
    const { getMovieData } = this.props;
    const { isMenuChecked, genreMenus } = this.state;
    const genreMenusArr = Object.entries(genreMenus);
    return (
      <section className="filterGenreMenu">
        <header className="menuTitle">
          <button className="menuClosedBtn">X</button>영화
        </header>
        <ul className="menuLists">
          <li className="menuList" onClick={this.clickRandomMenu}>
            랜덤 영화 {isMenuChecked && <span className="menuChecked">✔</span>}
          </li>
          <h6 className="menuSubTitle">장르</h6>
          {genreMenusArr.map(el => (
            <MenuList
              getMovieData={getMovieData}
              key={el[0]}
              id={el[0]}
              genre={el[1]}
            />
          ))}
        </ul>
      </section>
    );
  }
}
