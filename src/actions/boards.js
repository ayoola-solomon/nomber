import _ from 'lodash';
import Constants from '../constants';
import { auth, boards } from '../utils/firebase';

const Actions = {
  fetchBoards: () =>
    (dispatch) => {
      const uid = auth().currentUser.uid;
      boards(uid)
      .on('value', (snap) => {
        dispatch({
          type: Constants.FETCH_BOARDS,
          payload: _.values(snap.val()),
        });
      }, (error) => {
        dispatch({
          type: Constants.FETCH_BOARDS_FAILURE,
          payload: error.message,
        });
      });
    },

  addBoard: data =>
    (dispatch) => {
      const uid = auth().currentUser.uid;
      const board = boards(uid).push(data);
      data.id = board.key;

      board.update(data)
      .then(() => {
        dispatch({
          type: Constants.ADD_NEW_BOARD_SUCCESS,
        });
      }, (error) => {
        dispatch({
          type: Constants.ADD_NEW_BOARD_FAILURE,
          error: error.message,
        });
      });
    },
};

export default Actions;
