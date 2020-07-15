import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/core'
import Theme from './Theme'


ReactDOM.render(
  <ThemeProvider theme={Theme}>
        <App />
  </ThemeProvider>,
  document.getElementById('root')
);
