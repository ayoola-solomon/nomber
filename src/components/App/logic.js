import React, { Component, PropTypes } from 'react';
import View from './view';

const propTypes = {
  currentUser: PropTypes.object,
};

class Logic extends Component {
  render() {
    if (!this.props.currentUser) return false;
    return <View {...this} />;
  }
}

Logic.propTypes = propTypes;
export default Logic;
