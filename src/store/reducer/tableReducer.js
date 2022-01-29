import {
  DELETE,
  FETCH_GAMES_ERROR,
  FETCH_GAMES_REQUEST,
  FETCH_GAMES_SUCCESS,
} from '../constants/actionsConst';

const initialState = {
  lobby: [],
  isLoading: false,
  isError: false,
};
const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAMES_SUCCESS:
      return {
        ...state,
        lobby: action.payload,
        isLoading: false,
        isError: false,
      };
    case FETCH_GAMES_REQUEST:
      return {
        ...state,
        isError: false,
        isLoading: true,
      };
    case FETCH_GAMES_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case DELETE:
      return {
        lobby: action.payload,
      };
    default:
      return state;
  }
};
export default tableReducer;
