import Constants from '../constants';

export const initialState = {
  currentUser: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Constants.USER_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
}
