import React, { PropTypes } from 'react';
import makeBem from 'bem-cx';
import './formElement.css';

const bem = makeBem('formElement');

const TextField = ({ type = 'text', label = '', hint = '', help = '', error = '', disabled = false, name, value, onChange }) =>
  (<div className={bem}>
    <div className={bem.el('label')}>{label}</div>
    <div className={bem.el('inputWrapper')}>
      <input
        name={name}
        className={bem.el('input').mod({ error: !!error })}
        type={type}
        placeholder={hint}
        defaultValue={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
    {(error || help) &&
      <div className={bem.el('message').mod({ error: !!error, help: !error && help })}>
        {error || help}
      </div>
    }
  </div>);

TextField.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  help: PropTypes.string,
  error: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default TextField;
