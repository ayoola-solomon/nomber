import React, { Component, PropTypes } from 'react';
import View from './view';

class Logic extends Component {

  state = {
    user: {
      email: '',
      password: '',
    },
  }

  componentWillUnmount() {
    // this.props.resetSession();
  }

  handleChange = field => (e) => {
    const { user } = this.state;
    user[field] = e.target.value;

    this.setState({
      user,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signin(this.state.user);
  }

  render() {
    return <View {...this} />;
  }
}

Logic.propTypes = {
  signin: PropTypes.func,
  resetSession: PropTypes.func,
  error: PropTypes.string,
};

export default Logic;
