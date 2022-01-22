import React from 'react';
import { Link } from 'react-router-dom';
import './CreateLobbyForm.scss';

export default class CreateLobbyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: '',
      rang: '',
      users: '',
      map: '',
      date: '',
      time: '',
      comment: '',
    };
    this.handlerSaveInputs = this.handlerSaveInputs.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.checkForm = this.checkForm.bind(this);
  }

  handlerSaveInputs() {
    if (this.checkForm()) {
      const activeUser = JSON.parse(localStorage.getItem('activeUser') || '[]');
      const newGame = {
        game: this.state.game,
        rang: this.state.rang,
        users: this.state.users,
        map: this.state.map,
        date: this.state.date,
        time: this.state.time,
        comment: this.state.comment,
        userId: activeUser.id,
      };
      const oldGames = JSON.parse(localStorage.getItem('lobbyData') || '[]');
      oldGames.push(newGame);
      localStorage.setItem('lobbyData', JSON.stringify(oldGames));
      alert('Поле созданно');
    } else {
      alert('Заполните все поля');
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  checkForm() {
    if (
      this.state.game === '' ||
      this.state.rang === '' ||
      this.state.users === '' ||
      this.state.map === '' ||
      this.state.date === '' ||
      this.state.time === '' ||
      this.state.comment === ''
    ) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <div className="createLobby">
        <div className="createLobby-settings">
          <div>
            <label>
              Игра
              <select name="game" onChange={e => this.handleChange(e)}>
                <option value="Dota2">Dota 2</option>
                <option value="Cs">Counter-strike</option>
                <option value="Tf">TeamFortress</option>
                <option value="Lol">League of Legends</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Ранг
              <select name="rang" onChange={e => this.handleChange(e)}>
                <option>{this.state.rang || 'Ранг'}</option>
                <option value="Novice">Novice</option>
                <option value="Amateur">Amateur</option>
                <option value="Expert">Expert</option>
              </select>
            </label>
          </div>

          <div>
            <label>
              Игроков
              <input
                type="number"
                name="users"
                value={this.state.users}
                onChange={e => this.handleChange(e)}
                placeholder="Кол-во игроков"
              />
            </label>
            <label>
              Карта
              <input
                type="text"
                name="map"
                value={this.state.map}
                onChange={e => this.handleChange(e)}
                placeholder="Карта"
              />
            </label>
          </div>

          <div>
            <label>
              Дата
              <input
                type="date"
                name="date"
                value={this.state.date}
                onChange={e => this.handleChange(e)}
              />
            </label>
            <label>
              Время
              <input
                type="time"
                name="time"
                value={this.state.time}
                onChange={e => this.handleChange(e)}
              />
            </label>
          </div>
        </div>

        <div className="createLobby-comment">
          <label>
            Описание
            <textarea
              name="comment"
              cols="40"
              rows="5"
              placeholder="Ваш комментарий"
              value={this.state.comment}
              onChange={e => this.handleChange(e)}
            />
          </label>
        </div>
        <Link to="/MyLobby">
          <button type="button" onClick={() => this.handlerSaveInputs()}>
            Создать лобби
          </button>
        </Link>
      </div>
    );
  }
}
