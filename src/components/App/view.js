import React, { PropTypes } from 'react';
import Header from '../../components/Wrapper/Header';
import Content from '../../components/Wrapper/Header/content';
import Boards from '../../components/Boards';
import './App.css';

const propTypes = {
  props: PropTypes.shape({
    currentUser: PropTypes.object.isRequired,
  }),
};

const View = ({ props: { currentUser } }) =>
  <div className="App">
    <Header title="Nomber" currentUser={currentUser} />
    <Content>
      <Boards />
    </Content>
  </div>;

View.propTypes = propTypes;
export default View;
