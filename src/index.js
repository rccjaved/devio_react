import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TopNavigation from './components/TopNavigation';
import MainPage from './components/MainPage';
import App from './App';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <TopNavigation></TopNavigation>
    <MainPage></MainPage> */}
    <App />
  </React.StrictMode>

  
);

reportWebVitals();
