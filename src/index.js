import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import AppContextProvider from './components/context/AppContextProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

