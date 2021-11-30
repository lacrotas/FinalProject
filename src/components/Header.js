import React from 'react';

import { Link } from 'react-router-dom';
import Logo from '../assets/logo2White.png';
import ModalWindow from './ModalWindow';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpened: false,
    };
  }

  isOpen() {
    this.setState({ isModalOpened: true });
  }

  render() {
    return (
      <header>
        <div className="header-logo">
          <img src={Logo} alt="" />
          <Link to="/">
            <h2>TeamSet</h2>
          </Link>
        </div>
        <div className="header-navbar">
          <button type="button" onClick={() => this.isOpen()}>
            Log in
          </button>
        </div>
        {this.state.isModalOpened && <ModalWindow value={this.state.isModalOpened} />}
      </header>
    );
  }
}

export default Header;
