import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import Store from './app/store';
import App from './app/App.js';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);

if(process.env.NODE_ENV === 'development') {
  const {worker} = require('./mocks/browser');
  worker.start();
}

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
