import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './components/app/app.jsx';
import { store } from "./services/store";
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);