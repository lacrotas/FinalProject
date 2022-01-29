import { getGames, deleteLobby, editGames } from '../../helpers/games';
import { fetchGamesError, fetchGamesRequest, fetchGamesSuccess } from '../actions/actions';

export const getLobby = () => {
  return dispatch => {
    dispatch(fetchGamesRequest());
    try {
      const data = getGames();
      dispatch(fetchGamesSuccess(data));
    } catch {
      dispatch(fetchGamesError());
    }
  };
};

export const deleteMyLobby = id => {
  return dispatch => {
    dispatch(fetchGamesRequest());
    try {
      const data = deleteLobby(id);
      dispatch(fetchGamesSuccess(data));
    } catch {
      dispatch(fetchGamesError());
    }
  };
};

export const getLobbyToRedaction = lobby => {
  return dispatch => {
    dispatch(fetchGamesRequest());
    try {
      const data = editGames(lobby);
      dispatch(fetchGamesSuccess(data));
    } catch {
      dispatch(fetchGamesError());
    }
  };
};
