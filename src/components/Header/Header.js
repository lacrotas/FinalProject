import React from 'react';

import { Link } from 'react-router-dom';
import Logo from '../../assets/logo2White.png';
import Navigation from './components/navigation/Navigation';

import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__container--left">
          <img className="header__logo" src={Logo} alt="logo" />
          <Link to="/">
            <h2 className="header__text">TeamSet</h2>
          </Link>
        </div>
        <div className="header__navbar--right">
          <Navigation />
        </div>
      </header>
    );
  }
}

export default Header;
