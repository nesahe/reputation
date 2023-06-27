import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './AppRouter';
import './styles/reset.css';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);