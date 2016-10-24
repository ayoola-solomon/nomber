import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from '../constants/theme';

const propTypes = {
  children: PropTypes.object.isRequired,
};

const MainLayout = ({ children }) =>
  <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
    {children}
  </MuiThemeProvider>;

MainLayout.propTypes = propTypes;
export default MainLayout;
