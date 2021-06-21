import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ListProvider } from './Context'


ReactDOM.render(
  <React.StrictMode>
  <ListProvider>
    <App />
    </ListProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


