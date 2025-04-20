/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // <--- THIS LINE IS SUPER IMPORTANT!
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
*/
import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App'; // Your main App component
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
