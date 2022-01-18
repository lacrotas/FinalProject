import React from 'react';

import CreateLobbyForm from './components/createLobbyForm/CreateLobbyForm';
import SearchLobbyForm from './components/searchLobbyForm/SearchLobbyForm';

class CreateLobby extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: true,
      button1color: '#ffffff',
      button2color: '#272227',
      button1TextColor: '#000000',
      button2TextColor: '#ffffff',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(previousState => ({ value: !previousState.value }));
    if (this.state.value) {
      this.setState({
        button1color: '#272227',
        button2color: '#ffffff',
        button1TextColor: '#ffffff',
        button2TextColor: '#272227',
      });
    } else {
      this.setState({
        button1color: '#ffffff',
        button2color: '#272227',
        button1TextColor: '#272227',
        button2TextColor: '#ffffff',
      });
    }
  }

  render() {
    return (
      <>
        <div className="change-form-button">
          <button
            type="button"
            onClick={this.handleClick}
            style={{ backgroundColor: this.state.button1color, color: this.state.button1TextColor }}
          >
            Создание Лобби
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            style={{ backgroundColor: this.state.button2color, color: this.state.button2TextColor }}
          >
            Поиск Лобби
          </button>
        </div>
        <div className="choose-form">
          {this.state.value && <CreateLobbyForm />}
          {!this.state.value && <SearchLobbyForm />}
        </div>
      </>
    );
  }
}

export default CreateLobby;
