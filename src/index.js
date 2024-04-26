import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Navbar from './components/Navbar/Navbar';
import Cursor from './components/stickyCursor/cursor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Cursor />
    <Navbar />
    <App />
  </React.StrictMode>
);

