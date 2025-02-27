import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Buffer } from "buffer";  // Import the buffer polyfill

// Now you can use Buffer globally
window.Buffer = Buffer;  // Make Buffer available globally


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


