import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import customFetch from './utils/customFetch.js';
import './index.css';

const resp = await customFetch.get('/test');
// console.log(resp);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
