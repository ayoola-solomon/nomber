import React, { PropTypes } from 'react';
import makeBem from 'bem-cx';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import './header.css';
import logo from '../../../static/images/logo.svg';

const bem = makeBem('headerBar');

const propTypes = {
  title: PropTypes.string.isRequired,
  currentUser: PropTypes.object.isRequired,
};

const Header = ({ title, currentUser }) =>
  <Paper className={bem} zDepth={2}>
    <Toolbar className={bem.el('background').toString()}>
      <ToolbarGroup firstChild>
        <img className={bem.el('image')} src={logo} alt="logo" />
        <ToolbarTitle className={bem.el('title').toString()} text={title} />
      </ToolbarGroup>
      <ToolbarGroup>
        {currentUser.name && <div className={bem.el('avatar').el('name')}>
          {currentUser.name}
        </div>}
        { currentUser.photoURL ?
          (<div className={bem.el('avatar').el('image')}>
            <Avatar src={currentUser.photoURL} size={30} />
          </div>) :
          (<div className={bem.el('avatar').el('letter')}>
            <Avatar src={currentUser.photoURL} size={30}>
              {currentUser.name.charAt(0)}
            </Avatar>
          </div>)
        }
      </ToolbarGroup>
    </Toolbar>
  </Paper>;

Header.propTypes = propTypes;
export default Header;
