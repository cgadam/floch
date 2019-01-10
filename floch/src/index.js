import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/FlochApp';
import rootReducer from './reducers'
import * as initialState from './state/initialState'

const store = createStore(rootReducer, initialState.default);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('floch')
);
