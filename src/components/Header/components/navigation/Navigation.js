import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import ModalWindow from '../ModalWindows/ModalWindow';

import './Navigation.scss';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isAuthorizated: false,
      login: '',
    };
    this.toggleState = this.toggleState.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);
    this.logOut = this.logOut.bind(this);
    this.stringAvatar = this.stringAvatar.bind(this);
  }

  getUserInfo = user => {
    this.state.login = user.login;
    localStorage.setItem('activeUser', JSON.stringify(user));
    this.logOut();
  };

  stringAvatar = name => {
    return {
      children: `${name.split(' ')[0][0]}`,
    };
  };

  logOut() {
    this.setState(previousState => ({ isAuthorizated: !previousState.isAuthorizated }));
  }

  toggleState() {
    this.setState(previousState => ({ isOpen: !previousState.isOpen }));
  }

  render() {
    return (
      <div className="navigation">
        {!this.state.isAuthorizated && (
          <Button className="header__button--login" onClick={this.toggleState}>
            Вход
          </Button>
        )}
        {this.state.isOpen && (
          <ModalWindow
            toggleState={this.toggleState}
            getUserInfo={this.getUserInfo}
            isOpen={this.isOpen}
          />
        )}
        {this.state.isAuthorizated && (
          <ButtonGroup variant="text" aria-label="text button group">
            <Button>
              <Link to="/AllLobby">Список лобби</Link>
            </Button>
            <Button>
              <Link to="/MyLobby">Ваши лобби</Link>
            </Button>
            <Button>
              <p>{this.state.login}</p>
              <Avatar {...this.stringAvatar(this.state.login)} />
            </Button>
            <Button className="header__button--login" onClick={this.logOut}>
              Выход
            </Button>
          </ButtonGroup>
        )}
      </div>
    );
  }
}

export default Navigation;
