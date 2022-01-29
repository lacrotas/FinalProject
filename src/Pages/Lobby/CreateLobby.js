import React, { useState } from 'react';

import SearchImg from '../../assets/icon/search.png';
import CreateImg from '../../assets/icon/creating.png';
import CreateLobbyForm from './components/createLobbyForm/CreateLobbyForm';
import SearchLobbyForm from './components/searchLobbyForm/SearchLobbyForm';
import './CreateLobby.scss';

const CreateLobby = () => {
  const [actionType, setActionType] = useState(true);

  const activeButton = {
    buttonColor: '#d0ebec',
    buttonTextColor: '#000000',
  };
  const unactiveButton = {
    buttonColor: '#313131',
    buttonTextColor: '#ffffff',
    imgColor: 'invert(1)',
  };
  const [firstButtonType, setFirstButtonType] = useState(activeButton);
  const [secondButtonType, setSecondButtonType] = useState(unactiveButton);

  function creationWindow() {
    setActionType(true);
    setFirstButtonType(activeButton);
    setSecondButtonType(unactiveButton);
  }
  function searchWindow() {
    setActionType(false);
    setFirstButtonType(unactiveButton);
    setSecondButtonType(activeButton);
  }
  return (
    <div className="change-form">
      <div className="change-form__button">
        <button
          className="change-form__button--create"
          type="button"
          onClick={() => creationWindow()}
          style={{
            backgroundColor: firstButtonType.buttonColor,
            color: firstButtonType.buttonTextColor,
          }}
        >
          Создать
          <img
            className="change-form__image--create"
            alt="search"
            src={CreateImg}
            style={{ filter: firstButtonType.imgColor }}
          />
        </button>
        <button
          className="change-form__button--search"
          type="button"
          onClick={() => searchWindow()}
          style={{
            backgroundColor: secondButtonType.buttonColor,
            color: secondButtonType.buttonTextColor,
          }}
        >
          Найти
          <img
            className="change-form__image--search"
            alt="search"
            src={SearchImg}
            style={{ filter: secondButtonType.imgColor }}
          />
        </button>
      </div>
      <div className="choose-form">
        {actionType && <CreateLobbyForm />}
        {!actionType && <SearchLobbyForm />}
      </div>
    </div>
  );
};

export default CreateLobby;
