import React, { PropTypes } from 'react';
import makeBem from 'bem-cx';
import './form.css';

const bem = makeBem('formWrapper');

const FormAction = ({ children }) =>
  <div className={bem.el('action').el('center')}>
    {children}
  </div>;

FormAction.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormAction;
