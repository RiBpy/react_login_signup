import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './App';
import {HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./context/reducer"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
    <Router> 
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
 </React.StrictMode>

);
