import React from 'react';

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
    this.handlerChange = this.handlerChange.bind(this);
  }

  handlerChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="createLobby">
        <div className="createLobby-settings">
          <div>
            <label>
              Игра
              <select name="game">
                <option>{this.state.game || 'Игра'}</option>
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
              <select name="rang">
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
                onChange={e => this.handlerChange(e)}
                placeholder="Кол-во игроков"
              />
            </label>
            <label>
              Карта
              <input
                type="text"
                name="map"
                value={this.state.map}
                onChange={e => this.handlerChange(e)}
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
                onChange={e => this.handlerChange(e)}
              />
            </label>
            <label>
              Время
              <input
                type="time"
                name="time"
                value={this.state.time}
                onChange={e => this.handlerChange(e)}
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
              onChange={e => this.handlerChange(e)}
            />
          </label>
        </div>
        <button type="button">Создать лобби</button>
      </div>
    );
  }
}
