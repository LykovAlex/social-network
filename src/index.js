import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './redux/store.js';
import * as serviceWorker from './serviceWorker';




let renderDOMTree = (state) => {
  ReactDOM.render(
    <App
      state={state}
      dispatch={store.dispatch.bind(store)}
    />,
    document.getElementById('root')
  );
};

renderDOMTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderDOMTree(state);
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
