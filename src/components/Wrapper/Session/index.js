import React, { PropTypes } from 'react';
import makeBem from 'bem-cx';
import './session.css';

const bem = makeBem('sessionWrapper');

const SessionWrapper = ({ children }) =>
  <div className={bem}>
    <div className={bem.el('center')}>{children}</div>
  </div>;

SessionWrapper.propTypes = {
  children: PropTypes.node,
};

export default SessionWrapper;
