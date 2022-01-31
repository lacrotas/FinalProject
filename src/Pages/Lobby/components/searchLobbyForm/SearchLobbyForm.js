import React from 'react';

import './SearchLobbyForm.scss';

export default class SearchLobbyForm extends React.Component {
  render() {
    return (
      <div className="searchLobby">
        <div className="createLobby-settings">
          <div>
            <label>
              Игра
              <select name="create-form">
                <option className="Dota" value="Dota2">
                  Dota 2
                </option>
                <option value="Cs">Counter-strike</option>
                <option value="Tf">TeamFortress</option>
                <option value="Lol">League of Legends</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Ранг
              <select name="create-form">
                <option value="Novice">Novice</option>
                <option value="Amateur">Amateur</option>
                <option value="Expert">Expert</option>
              </select>
            </label>
          </div>

          <div>
            <label>
              Игроков
              <input type="number" name="create-form" placeholder="Кол-во игроков" />
            </label>
            <label>
              Карта
              <input type="text" name="create-form" placeholder="Карта" />
            </label>
          </div>

          <div>
            <label>
              Дата
              <input type="date" name="create-form" />
            </label>
            <label>
              Время
              <input type="time" name="create-form" placeholder="время" />
            </label>
          </div>
        </div>
        <button className="searchLobby__button" type="button">
          Найти лобби
        </button>
      </div>
    );
  }
}
