import { createStore } from 'redux';

const reducer = (state = {player:100, opponent:100}, action) => {
    switch (action.type) {
      case 'UPDATE':
        console.log('updating global state');
        const newState = {...state};
        return Object.assign({}, newState, action.payload);
      case 'RESET':
        console.log('resetting global state');
        return {player:100, opponent:100}
      default:
        return state;
    }
  };
  const store = createStore(reducer);

  export default store;