import { STORAGE_KEYS } from '../constatns/storage';

export const getGames = () => {
  const updatedRows = [];
  const oldGames = JSON.parse(localStorage.getItem(STORAGE_KEYS.LOBBY_DATA) || '[]');
  const activeUser = JSON.parse(localStorage.getItem(STORAGE_KEYS.ACTIVE_USER) || '[]');

  for (let i = 0; i < oldGames.length; i++) {
    if (activeUser.id === oldGames[i].userId) {
      updatedRows.push({
        id: i,
        userId: oldGames[i].userId,
        game: oldGames[i].game,
        map: oldGames[i].map,
        rang: oldGames[i].rang,
        users: oldGames[i].users,
        date: oldGames[i].date,
        time: oldGames[i].time,
        comment: oldGames[i].comment,
      });
    }
  }
  return updatedRows;
};

export const deleteLobby = id => {
  const oldGames = JSON.parse(localStorage.getItem(STORAGE_KEYS.LOBBY_DATA) || '[]');
  const updatedLobby = [];
  let coefficient = 0;
  for (let i = 0; i < oldGames.length; i++) {
    if (id !== i) {
      updatedLobby.push({
        userId: oldGames[i].userId,
        game: oldGames[i].game,
        map: oldGames[i].map,
        rang: oldGames[i].rang,
        users: oldGames[i].users,
        date: oldGames[i].date,
        time: oldGames[i].time,
        comment: oldGames[i].comment,
        id: i - coefficient,
      });
    } else {
      coefficient = 1;
    }
  }
  localStorage.setItem(STORAGE_KEYS.LOBBY_DATA, JSON.stringify(updatedLobby));
  return updatedLobby;
};

export const editGames = game => {
  const oldGames = JSON.parse(localStorage.getItem(STORAGE_KEYS.LOBBY_DATA) || '[]');
  const updatedLobby = [];

  for (let i = 0; i < oldGames.length; i++) {
    if (game.id === i) {
      updatedLobby.push(game);
    } else {
      updatedLobby.push({
        userId: oldGames[i].userId,
        game: oldGames[i].game,
        map: oldGames[i].map,
        rang: oldGames[i].rang,
        users: oldGames[i].users,
        date: oldGames[i].date,
        time: oldGames[i].time,
        comment: oldGames[i].comment,
      });
    }
  }
  localStorage.setItem(STORAGE_KEYS.LOBBY_DATA, JSON.stringify(updatedLobby));
  return updatedLobby;
};
