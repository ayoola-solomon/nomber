import React, { PropTypes } from 'react';
import { Card } from 'material-ui/Card';
import makeBem from 'bem-cx';
import RaisedButton from 'material-ui/RaisedButton';
import Textfield from '../../components/Form/TextField';

const bem = makeBem('boards');

const style = {
  board: {
    minWidth: 300,
    minHeight: 100,
    margin: 10,
  },
};

const BoardForm = ({ name, error, onChange, onSubmit, onCancel }) =>
  <div className={bem.el('wrapper').el('board').el('form')}>
    <Card style={style.board}>
      <form onSubmit={onSubmit}>
        <Textfield type="text" name="board" value={name} label="New Board" hint="Board name" error={error} onChange={onChange} />
        <div className={bem.el('wrapper').el('board').el('form').el('button')}>
          <RaisedButton primary label="Cancel" onClick={onCancel} />
          <RaisedButton secondary label="Add" onClick={onSubmit} />
        </div>
      </form>
    </Card>
  </div>;

BoardForm.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default BoardForm;
