import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { KitesurfingInfoProvider } from './context/kitesurfingInfoContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <KitesurfingInfoProvider>
    <App />
  </KitesurfingInfoProvider>
  // </React.StrictMode>
);
