import { push } from 'react-router-redux';
import _ from 'lodash';
import Constants from '../constants';
import { auth } from '../utils/firebase';

const Actions = {
  currentUser: () =>
    (dispatch) => {
      auth()
      .onAuthStateChanged((user) => {
        if (user) {
          user.providerData.forEach((data) => {
            const currentUser = _.pick(data, 'displayName', 'email', 'photoURL', 'uid');
            currentUser.name = currentUser.displayName;
            delete currentUser.displayName;

            dispatch({
              type: Constants.CURRENT_USER,
              payload: currentUser,
            });
          });
        }
      });
    },

  signup: data =>
    (dispatch) => {
      dispatch({ type: Constants.USER_SIGN_UP_REQUEST });
      auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((user) => {
        if (user !== null) {
          user.updateProfile({
            displayName: data.name,
          }).then((response) => {
            if (response !== null) {
              localStorage.setItem('token', user.rd);
              dispatch(push('/'));
            }
          }, (error) => {
            dispatch({
              type: Constants.USER_SIGN_UP_FAILURE,
              payload: error.message,
            });
          });
        }
      }, (error) => {
        dispatch({
          type: Constants.USER_SIGN_UP_FAILURE,
          payload: error.message,
        });
      });
    },

  signin: data =>
    (dispatch) => {
      dispatch({ type: Constants.USER_SIGN_IN_REQUEST });
      auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then((user) => {
        if (user !== null) {
          localStorage.setItem('token', user.rd);
          dispatch(push('/'));
        }
      }, (error) => {
        dispatch({
          type: Constants.USER_SIGN_IN_FAILURE,
          payload: error.message,
        });
      });
    },

  signupWithGoogle: () =>
    (dispatch) => {
      auth('Google')
      .then((response) => {
        if (response !== null) {
          localStorage.setItem('token', response.credential.idToken);
          dispatch(push('/'));
        }
      })
      .catch((error) => {
        dispatch({
          type: Constants.USER_SIGN_IN_FAILURE,
          payload: error.message,
        });
      });
    },

  resetSession: () => ({ type: Constants.SESSION_RESET }),
};

export default Actions;
