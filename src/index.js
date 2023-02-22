import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App_xx from './App_xx';

import { AppProvider_xx } from './Context_xx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider_xx>
      <App_xx />  
    </AppProvider_xx>
  </React.StrictMode>
);
