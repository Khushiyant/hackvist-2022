import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App';
import AppState from './context/AppContext/AppState';
import AuthState from './context/AuthContext/AuthState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthState>
      <AppState>
          <Router>
            <App />
          </Router>
      </AppState>
    </AuthState>
);