import React, { PropTypes } from 'react';
import makeBem from 'bem-cx';
import { Card } from 'material-ui/Card';
import SocialPerson from 'material-ui/svg-icons/social/person';
import BoardCard from './card';
import BoardForm from './form';
import './boards.css';

const bem = makeBem('boards');

const style = {
  new: {
    backgroundColor: 'rgba(0, 0, 0, 0.51)',
    height: 100,
    minWidth: 300,
    margin: 10,
  },
};

const View = ({ onBoardClick, handleChange, handleSubmit, handleShowForm,
    state: { board, showForm }, props: { ownedBoards } }) =>
    (<div className={bem}>
      <div className={bem.el('header')}>
        <SocialPerson /> <span>My boards</span>
      </div>
      <div className={bem.el('wrapper')}>
        { ownedBoards.map(data =>
          <BoardCard
            key={data.id}
            onClick={onBoardClick}
            {...data}
          />
        )}
        { showForm ?
          (<BoardForm {...board} onChange={handleChange} onSubmit={handleSubmit} onCancel={handleShowForm} />) :
          (<div className={bem.el('wrapper').el('board').el('new')}>
            <Card style={style.new} onClick={handleShowForm}>
              <h4> Add new board </h4>
            </Card>
          </div>)
        }
      </div>
    </div>);

View.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleShowForm: PropTypes.func,
  onBoardClick: PropTypes.func,
  state: PropTypes.shape({
    board: PropTypes.object,
    showForm: PropTypes.bool,
  }),
  props: PropTypes.shape({
    ownedBoards: PropTypes.array,
  }),
};

export default View;
