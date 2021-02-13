import React from 'react';
import App from './App';

import { hydrate, render } from "react-dom";

hydrate( 
  <React.StrictMode>
         <App />
  </React.StrictMode>,
  document.getElementById('root')
);
