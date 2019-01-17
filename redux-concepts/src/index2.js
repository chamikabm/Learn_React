// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

const counter = (state = 0, action) => {
  console.log('AA', state);
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state-1;
    default:
      return state;
  }
};

const createStore = (reducer) => {

  let state;
  let listeners = [];
  const getState = () => state;
  const dispatch = (action) => {
    // Update the app state with the action.
    state = reducer(state, action);

    // Call listeners after the state updated.
    listeners.forEach(listener => listener())
  };

  const subscribe = (listener) => {
    listeners.push(listener);

    // Return a function which let's users to unsubscribe a listener.
    return () => {
      listeners = listeners.filter(l => l !== listener);
    }
  };

  // By the time we create the store we need to populate the initial state hence dispatch empty object.
  dispatch({});

  return {
    getState,
    subscribe,
    dispatch,
  }
};

const store = createStore(counter);

const render = () => {
  document.body.innerText = store.getState();
};

store.subscribe(() => {
  render();
});

// Used to render the initial state.
render();

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
