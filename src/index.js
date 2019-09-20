import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './redux/state.js';
import * as serviceWorker from './serviceWorker';




let renderDOMTree = () => {
  ReactDOM.render(
    <App
      state={store.getState()}
      dispatch={store.dispatch.bind(store)}
    />,
    document.getElementById('root')
  );
};

renderDOMTree();
store.subscribe(renderDOMTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
