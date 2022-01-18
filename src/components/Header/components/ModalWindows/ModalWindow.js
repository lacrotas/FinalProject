import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';

import './ModalWindow.scss';

class ModalWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      isAuthorizationWindow: true,
      login: '',
      password: '',
      rePassword: '',
      email: '',
    };
    this.toggleState = this.toggleState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.authorization = this.authorization.bind(this);
    this.changeWindow = this.changeWindow.bind(this);
    this.registration = this.registration.bind(this);
    this.checkEmail = this.checkEmail.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  authorization() {
    const oldUsers = JSON.parse(localStorage.getItem('UsersData') || '[]');
    for (let i = 0; i < oldUsers.length; i++) {
      if (this.state.email === oldUsers[i].email && this.state.password === oldUsers[i].password) {
        this.props.getUserInfo(oldUsers[i]);
        alert('work');
        this.toggleState();
      }
    }
  }

  changeWindow() {
    this.setState(previousState => ({
      isAuthorizationWindow: !previousState.isAuthorizationWindow,
    }));
  }

  toggleState() {
    this.setState(previousState => ({ isOpen: !previousState.isOpen }));
    this.props.toggleState();
  }

  registration() {
    if (this.state.rePassword === this.state.password && !this.checkEmail()) {
      const newUser = {
        login: this.state.login,
        password: this.state.password,
        email: this.state.email,
        rang: 'Novice',
        firstName: '',
        secondName: '',
      };
      const oldUsers = JSON.parse(localStorage.getItem('UsersData') || '[]');
      oldUsers.push(newUser);
      localStorage.setItem('UsersData', JSON.stringify(oldUsers));
    } else if (this.state.repassword !== this.state.password) {
      alert('пароли не совпадают');
    } else if (this.checkEmail()) {
      alert('На данныей email уже зарегестирирован пользователь');
    }
  }

  checkEmail() {
    const oldUsers = JSON.parse(localStorage.getItem('UsersData') || '[]');
    let emailExist = false;
    for (let i = 0; i < oldUsers.length; i++) {
      if (oldUsers[i].email === this.state.email) emailExist = true;
    }
    return emailExist;
  }

  render() {
    return (
      <div className="modal-window">
        <Modal
          open={this.state.isOpen && this.state.isAuthorizationWindow}
          onClose={this.toggleState}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="modal-window__container">
            <TextField
              className="modal-window__input"
              label="Почта"
              variant="standard"
              name="email"
              value={this.state.email}
              onChange={e => this.handleChange(e)}
            />
            <TextField
              className="modal-window__input"
              label="Пароль"
              type="password"
              variant="standard"
              name="password"
              value={this.state.password}
              onChange={e => this.handleChange(e)}
            />
            <Button variant="outlined" onClick={this.authorization}>
              Вход
            </Button>
            <Button className="modal-window__button--forgive" variant="text">
              Забыли пароль?
            </Button>
            <Button variant="outlined" onClick={this.changeWindow}>
              Регистрация
            </Button>
          </Box>
        </Modal>
        <Modal
          open={this.state.isOpen && !this.state.isAuthorizationWindow}
          onClose={this.toggleState}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="modal-window__container">
            <TextField
              className="modal-window__input"
              label="Логин"
              variant="standard"
              name="login"
              value={this.state.login}
              onChange={e => this.handleChange(e)}
            />
            <TextField
              className="modal-window__input"
              label="Пароль"
              type="password"
              variant="standard"
              name="password"
              value={this.state.password}
              onChange={e => this.handleChange(e)}
            />
            <TextField
              className="modal-window__input"
              label="Повторите пароль"
              type="password"
              variant="standard"
              name="rePassword"
              value={this.state.rePassword}
              onChange={e => this.handleChange(e)}
            />
            <TextField
              className="modal-window__input"
              label="Почта"
              variant="standard"
              name="email"
              value={this.state.email}
              onChange={e => this.handleChange(e)}
            />
            <Button variant="outlined" onClick={this.registration}>
              Зарегистрироваться
            </Button>
            <Button className="modal-window__button--forgive" variant="text">
              Забыли пароль?
            </Button>
            <Button variant="outlined" onClick={this.changeWindow}>
              Вход
            </Button>
          </Box>
        </Modal>
      </div>
    );
  }
}
ModalWindow.propTypes = {
  toggleState: PropTypes.func.isRequired,
  getUserInfo: PropTypes.func.isRequired,
};
export default ModalWindow;
