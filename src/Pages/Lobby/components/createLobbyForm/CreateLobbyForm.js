import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CreateLobbyForm.scss';
import Select from 'react-select';
import { GameOption } from '../../../../constatns/selects';

const CreateLobbyForm = () => {
  const [game, setGame] = useState('');
  const [map, setMap] = useState('');
  const [rang, setRang] = useState('');
  const [date, setDate] = useState('');
  const [users, setUsers] = useState('');
  const [time, setTime] = useState('');
  const [comment, setComment] = useState('');
  const [optionType, setOptionType] = useState(GameOption.CS);

  function chooseGame(value) {
    setGame(value);
    if (value === 'Dota 2') {
      setOptionType(GameOption.DOTA);
    }
    if (value === 'Counter-strike') {
      setOptionType(GameOption.CS);
    }
    if (value === 'TeamFortress') {
      setOptionType(GameOption.TF);
    }
    if (value === 'League of Legends') {
      setOptionType(GameOption.LOL);
    }
  }

  function handlerSaveInputs() {
    if (checkForm()) {
      const activeUser = JSON.parse(localStorage.getItem('activeUser') || '[]');
      const oldGames = JSON.parse(localStorage.getItem('lobbyData') || '[]');
      const newGame = {
        game,
        map: map.value,
        rang,
        date,
        users: `1/${users}`,
        time,
        comment,
        id: oldGames.length,
        userId: activeUser.id,
      };
      oldGames.push(newGame);
      localStorage.setItem('lobbyData', JSON.stringify(oldGames));
      alert('Поле созданно');
    } else {
      alert('Заполните все поля');
    }
  }

  function checkForm() {
    if (game === '' || rang === '' || users === '' || map === '' || date === '' || time === '') {
      return false;
    }
    return true;
  }

  return (
    <div className="createLobby">
      <div className="createLobby__flex">
        <div className="createLobby__flex--switch">
          <label className="createLobby__settings--game">
            Игра
            <select name="game" value={game} onChange={e => chooseGame(e.target.value)}>
              <option value="Dota 2">Dota 2</option>
              <option value="Counter-strike">Counter-strike</option>
              <option value="TeamFortress">TeamFortress</option>
              <option value="League of Legends">League of Legends</option>
            </select>
          </label>
          <label className="createLobby__settings--rang">
            Ранг
            <select name="rang" value={rang} onChange={e => setRang(e.target.value)}>
              <option value="Novice">Novice</option>
              <option value="Amateur">Amateur</option>
              <option value="Expert">Expert</option>
            </select>
          </label>
          <label className="createLobby__settings--map">
            {' '}
            Карта
            <Select
              className="createLobby__select--map"
              options={optionType}
              value={map}
              onChange={value => setMap(value)}
              placeholder={optionType[0].value}
            />
          </label>
        </div>
        <div className="createLobby__flex--input">
          <label className="createLobby__settings--users">
            Игроков
            <input
              type="number"
              name="users"
              value={users}
              onChange={e => setUsers(e.target.value)}
              placeholder="Кол-во игроков"
            />
          </label>
          <label className="createLobby__comment--date">
            Дата
            <input type="date" name="date" value={date} onChange={e => setDate(e.target.value)} />
          </label>
          <label className="createLobby__comment--time">
            Время
            <input type="time" name="time" value={time} onChange={e => setTime(e.target.value)} />
          </label>
        </div>
        <div className="createLobby__flex--textarea">
          <label>
            Описание
            <textarea
              name="comment"
              cols="40"
              rows="5"
              placeholder="Ваш комментарий"
              value={comment}
              onChange={e => setComment(e.target.value)}
            />
          </label>
        </div>
      </div>
      <Link to="/MyLobby">
        <button className="createLobby__button" type="button" onClick={() => handlerSaveInputs()}>
          Создать лобби
        </button>
      </Link>
    </div>
  );
};
export default CreateLobbyForm;
