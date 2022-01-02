import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux';
//import gamesReducer from './reducers/gamesReducers';
import thunk from 'redux-thunk';

//REDUX SETUP
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';

// REACT ROUTER
import {BrowserRouter as Router} from 'react-router-dom'


// Adding redux-thunk to add multiple components in the store
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>  
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
