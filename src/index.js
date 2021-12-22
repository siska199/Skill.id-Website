import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/global.css'
import './css/index.css'

import { BrowserRouter as Router } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <Router>
        <App />
      </Router>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);