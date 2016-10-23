import Constants from '../constants';

export const initialState = {
  currentUser: null,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Constants.CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    case Constants.CURRENT_USER_FAILURE:
    case Constants.USER_SIGN_IN_FAILURE:
    case Constants.USER_SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case Constants.SESSION_RESET:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
}
