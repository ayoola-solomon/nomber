import { connect } from 'react-redux';
import Logic from './logic';
import BoardsActions from '../../actions/boards';

const mapStateToProps = ({ boards }) => ({
  isFetching: boards.isFetching,
  ownedBoards: boards.ownedBoards,
});

const mapDispatchToProps = dispatch => ({
  fetchBoards: () => dispatch(BoardsActions.fetchBoards()),
  addBoard: data => dispatch(BoardsActions.addBoard(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Logic);
