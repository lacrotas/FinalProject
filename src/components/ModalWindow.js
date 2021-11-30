import React from 'react';
import PropTypes from 'prop-types';
import CloseImage from '../assets/close.png';

const Authorization = ({ switchWindow, onChangePassword }) => {
  return (
    <div className="authorization-modalWindow">
      <input type="text" name="authorizationForm" placeholder="Логин" />
      <input
        type="password"
        name="authorizationForm"
        placeholder="Пароль"
        onChange={event => onChangePassword(event.target.value)}
      />
      <button type="button">Войти</button>
      <p>Забыли пароль?</p>
      <button type="button" onClick={switchWindow}>
        Регистрация
      </button>
    </div>
  );
};
const Registration = ({ switchWindow }) => {
  return (
    <div className="registration-modalWindow">
      <input type="text" name="registrationForm" placeholder="Логин" />
      <input type="text" name="registrationForm" placeholder="Почта" />
      <input type="password" name="registrationForm" placeholder="Пароль" />
      <input type="password" name="registrationForm" placeholder="Повторите Пароль" />
      <button type="button">Зарегистрироваться</button>
      <p>Уже есть учетная запись?</p>
      <button type="button" onClick={switchWindow}>
        Войти
      </button>
    </div>
  );
};
export default class ModalWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: true,
      visible: true,
      login: '',
      password: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.closeModal = this.onChangePassword.bind(this);
  }

  handleClick() {
    this.setState(previousState => ({ value: !previousState.value }));
  }

  onChangePassword(title) {
    this.setState({
      password: title,
    });
  }

  onChangeLogin(title) {
    this.setState({
      login: title,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
    });
  }

  render() {
    if (!this.state.visible) {
      return null;
    }
    return (
      <div className="modalWindow">
        <button type="button" className="buttonClose" onClick={this.closeModal}>
          <img src={CloseImage} alt="" />
        </button>
        {this.state.value && (
          <Authorization switchWindow={this.handleClick} onChangePassword={this.onChangePassword} />
        )}
        {!this.state.value && <Registration switchWindow={this.handleClick} />}
        <h2>{this.state.password}</h2>
        <h2>{this.state.login}</h2>
        <input type="text" name="authorizationForm" placeholder="Логин" />
      </div>
    );
  }
}

Authorization.propTypes = {
  switchWindow: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
};

Registration.propTypes = {
  switchWindow: PropTypes.func.isRequired,
};

// export default ModalWindow;
