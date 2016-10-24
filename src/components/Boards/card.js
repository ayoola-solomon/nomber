import React, { PropTypes } from 'react';
import { Card } from 'material-ui/Card';
import makeBem from 'bem-cx';

const bem = makeBem('boards');

const style = {
  board: {
    minWidth: 300,
    minHeight: 100,
    margin: 10,
  },
};

const BoardCard = ({ id, name, onClick }) =>
  <div className={bem.el('wrapper').el('board')}>
    <Card style={style.board} onClick={() => onClick(id)}>
      <h4> {name} </h4>
    </Card>
  </div>;

BoardCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BoardCard;
