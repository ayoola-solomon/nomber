import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const propTypes = {
  children: PropTypes.object.isRequired,
};

const MainLayout = ({ children }) =>
  <MuiThemeProvider>
    {children}
  </MuiThemeProvider>;

MainLayout.propTypes = propTypes;
export default MainLayout;
