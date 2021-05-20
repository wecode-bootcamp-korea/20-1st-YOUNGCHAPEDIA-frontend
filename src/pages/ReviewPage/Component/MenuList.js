import React, { Component } from 'react';
import './MenuList.scss';

export default class MenuList extends Component {
  constructor() {
    super();
    this.state = {
      isMenuChecked: false,
    };
  }

  clickGenreMenu = () => {
    this.props.getMovieData(this.props.id);
    this.setState({
      isMenuChecked: !this.state.isMenuChecked,
    });
  };

  render() {
    const { genre } = this.props;
    const { isMenuChecked } = this.state;
    return (
      <>
        <li className="menuList" onClick={this.clickGenreMenu}>
          {genre}
          {isMenuChecked && <span className="menuChecked">✔</span>}
        </li>
      </>
    );
  }
}
