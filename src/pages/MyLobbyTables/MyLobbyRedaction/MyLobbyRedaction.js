import * as React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Select from 'react-select';
import { optionsCs, optionsDota, optionsTf, optionsLol } from '../../../constatns/selects';
import './MyLobbyRedaction.scss';

const MyLobbyRedaction = ({ currentLobby, getLobbyToRedaction }) => {
  const [game, setGame] = useState(currentLobby.game);
  const [map, setMap] = useState(currentLobby.map);
  const [rang, setRang] = useState(currentLobby.rang);
  const [date, setDate] = useState(currentLobby.date);
  const [users, setUsers] = useState(currentLobby.users);
  const [time, setTime] = useState(currentLobby.time);
  const [comment, setComment] = useState(currentLobby.comment);
  const [optionType, setOptionType] = useState(optionsTf);

  function chooseGame(value) {
    setGame(value);
    if (value === 'Dota2') {
      setOptionType(optionsDota);
    }
    if (value === 'Counter-strike') {
      setOptionType(optionsCs);
    }
    if (value === 'TeamFortress') {
      setOptionType(optionsTf);
    }
    if (value === 'League of Legends') {
      setOptionType(optionsLol);
    }
  }

  function saveEdition() {
    const lobby = {
      game,
      map,
      rang,
      date,
      users,
      time,
      comment,
      id: currentLobby.id,
      userId: currentLobby.userId,
    };
    getLobbyToRedaction(lobby);
  }
  return (
    <div className="redaction">
      <div className="redaction__flex">
        <div className="redaction__flex--switch">
          <label className="redaction__settings--game">
            Игра
            <select name="game" value={game} onChange={e => chooseGame(e.target.value)}>
              <option value="Dota2">Dota 2</option>
              <option value="Counter-strike">Counter-strike</option>
              <option value="TeamFortress">TeamFortress</option>
              <option value="League of Legends">League of Legends</option>
            </select>
          </label>
          <label className="redaction__flex--rang">
            Ранг
            <select name="rang" value={rang} onChange={e => setRang(e.target.value)}>
              <option value="Novice">Novice</option>
              <option value="Amateur">Amateur</option>
              <option value="Expert">Expert</option>
            </select>
          </label>
          <label className="redaction__flex--map">
            {' '}
            Карта
            <Select
              className="redaction__flex--map"
              options={optionType}
              value={map}
              onChange={value => setMap(value)}
              defaultValue={map}
            />
          </label>
        </div>
        <div className="redaction__flex--input">
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
          <label className="redaction__settings--date">
            Дата
            <input type="date" name="date" value={date} onChange={e => setDate(e.target.value)} />
          </label>
          <label className="redaction__settings--time">
            Время
            <input type="time" name="time" value={time} onChange={e => setTime(e.target.value)} />
          </label>
        </div>
        <div className="redaction__flex--textarea">
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
      <button className="redaction__button" type="button" onClick={() => saveEdition()}>
        Сохранить
      </button>
    </div>
  );
};

MyLobbyRedaction.propTypes = {
  currentLobby: PropTypes.object.isRequired,
  getLobbyToRedaction: PropTypes.func.isRequired,
};
export default MyLobbyRedaction;
