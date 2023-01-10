import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './stores/store.js'
import App from './components/App';

import { Provider } from 'react-redux'

store.subscribe(() => {
  console.log('current state', store.getState());
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);