import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import { ProductProvider } from './context';
import { BrowserRouter as Router } from 'react-router-dom'
// import Home from './pages/Home'
// import Mobiles from './pages/Mobiles'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductProvider>
    <Router>
      <App />
    </Router>
  </ProductProvider>
);
