import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './context/AuthContext';
import { PessoasProvider } from './context/PessoasContext';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Routers from './Routers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <PessoasProvider />
      <Routers />
    <PessoasProvider />
  </AuthProvider>
);

reportWebVitals();
