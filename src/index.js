import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import Counter from './features/counter/Counter';

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);
