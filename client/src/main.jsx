import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import App from './App.jsx';
import customFetch from './utils/customFetch.js';
import './index.css';

// const resp = await customFetch.get('/test');
// fixing npm run build issue

(async () => {
  await customFetch.get('/test');
})();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <App />
    <ToastContainer position='top-center' />
  </React.Fragment>
);
