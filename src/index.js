import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Router} from './Composants/Router';
import {Provider} from "react-redux";
import store from "./Store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <Router />
      </Provider>
  </React.StrictMode>
);
