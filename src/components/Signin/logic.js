import React, { Component } from 'react';
import View from './view';

class Logic extends Component {

  handleChange = (e) => {
    console.log(e.target.value);
  }

  render() {
    return <View {...this} />;
  }
}

export default Logic;
