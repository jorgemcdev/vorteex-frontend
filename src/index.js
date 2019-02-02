import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Load History
import history from './lib/history';

// Load Store
import store from './store';

import App from './App';

ReactDOM.render(
  (
    <Provider store={store} history={history}>
      <App />
    </Provider>
  ),
  document.getElementById('root')
);
