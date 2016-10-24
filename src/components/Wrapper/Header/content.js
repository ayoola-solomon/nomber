import React, { PropTypes } from 'react';
import makeBem from 'bem-cx';
import './header.css';

const bem = makeBem('headerBar');

const propTypes = {
  children: PropTypes.node.isRequired,
};

const HeaderContent = ({ children }) =>
  <div className={bem.el('content')}>
    {children}
  </div>;

HeaderContent.propTypes = propTypes;
export default HeaderContent;
