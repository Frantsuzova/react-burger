import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './components/app/app';
import { store } from "./services/store";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename="react-burger">
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);