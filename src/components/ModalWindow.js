import React from 'react';
// import CloseImage from '../assets/close.png';

class ModalWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'authorization',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    if (buttonName === 'authorization') {
      this.setState({
        value: 'registration',
      });
    } else if (buttonName === 'registration') {
      this.setState({
        value: 'authorization',
      });
    } else if (buttonName === 'registration') {
      this.setState({
        value: 'close',
      });
    }
  }

  render() {
    if (this.state.value === 'close') {
      return <div />;
    }
    return (
      <div className="modalWindow">
        <button type="button" className="buttonClose" onClick={this.handleClick('close')}>
          <p> close</p>
        </button>
        {this.state.value === 'authorization' && <Authorization />}
        {this.state.value === 'registration' && <Registration />}
      </div>
    );
  }
}

const Authorization = () => {
  return (
    <div className="authorization-modalWindow">
      <input type="text" name="authorizationForm" placeholder="Логин" />
      <input type="password" name="authorizationForm" placeholder="Пароль" />
      <button type="button">Войти</button>
      <button type="button" onClick={() => ModalWindow.handleClick('registration')}>
        Регистрация
      </button>
      <p>Забыли пароль?</p>
    </div>
  );
};
const Registration = () => {
  return (
    <div className="authorization-modalWindow">
      <input type="text" name="authorizationForm" placeholder="Логин" />
      <input type="password" name="authorizationForm" placeholder="Пароль" />
      <button type="button">Регистрация</button>
      <button type="button" onClick={() => ModalWindow.handleClick('authorization')}>
        Войти
      </button>
      <p>Забыли пароль?</p>
    </div>
  );
};
export default ModalWindow;
