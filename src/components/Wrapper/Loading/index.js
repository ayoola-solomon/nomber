import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
  position: 'relative',
  margin: 'auto',
};

const Loading = () => (
  <RefreshIndicator
    size={100}
    top={200}
    left={0}
    status="loading"
    style={style}
  />
);

export default Loading;
