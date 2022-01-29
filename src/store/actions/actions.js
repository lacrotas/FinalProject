import {
  DELETE,
  FETCH_GAMES_ERROR,
  FETCH_GAMES_REQUEST,
  FETCH_GAMES_SUCCESS,
} from '../constants/actionsConst';

export const del = games => ({ type: DELETE, payload: games });
export const fetchGamesRequest = () => ({ type: FETCH_GAMES_REQUEST });
export const fetchGamesSuccess = games => ({ type: FETCH_GAMES_SUCCESS, payload: games });
export const fetchGamesError = () => ({ type: FETCH_GAMES_ERROR });
