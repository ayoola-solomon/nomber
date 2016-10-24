import Constants from '../constants';

export const initialState = {
  ownedBoards: [],
  invitedBoards: [],
  isFetching: true,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Constants.FETCH_BOARDS:
      return {
        ...state,
        ownedBoards: action.payload,
        isFetching: false,
      };

    case Constants.FETCH_BOARDS_FAILURE:
    case Constants.ADD_NEW_BOARD_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
}
