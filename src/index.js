import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './stores/store.js'
import PokemonGame from "./components/PokemonGame.js";
import Container from 'react-bootstrap/Container';

import { Provider } from 'react-redux'

store.subscribe(() => {
  console.log('current state', store.getState());
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Container>
      <PokemonGame/>
    </Container>
  </Provider>
);