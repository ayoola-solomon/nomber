import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import View from './view';
import Loading from '../../components/Wrapper/Loading';

const propTypes = {
  ownedBoards: PropTypes.array,
  isFetching: PropTypes.bool,
  addBoard: PropTypes.func,
  fetchBoards: PropTypes.func,
};

class Logic extends Component {

  state = {
    board: {
      name: '',
      createdAt: _.now(),
    },
    error: null,
    showForm: false,
  }

  componentWillMount() {
    this.props.fetchBoards();
  }

  onBoardClick = (id) => {
    this.context.router.push(`/boards/${id}`);
  }

  handleChange = (e) => {
    const { board } = this.state;
    board.name = e.target.value;

    this.setState({
      board,
    });
  }

  handleShowForm = () => {
    const { board } = this.state;
    board.error = '';

    this.setState({
      showForm: !this.state.showForm,
      board,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { board } = this.state;

    if (board.name === '') {
      board.error = 'This field is required';
      this.setState({
        board,
      });
    } else {
      delete board.error;
      this.props.addBoard(board);

      board.name = '';
      this.setState({
        board,
        showForm: !this.state.showForm,
      });
    }
  }

  render() {
    if (this.props.isFetching) return <Loading />;
    return <View {...this} />;
  }
}

Logic.propTypes = propTypes;
Logic.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default Logic;
