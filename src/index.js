import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store';
import Root from './containers/root';
import './static/styles/index.css';

const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

const target = document.getElementById('root');
const node = <Root routerHistory={history} store={store} />;

injectTapEventPlugin();

ReactDOM.render(node, target);
