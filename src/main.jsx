// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Global styles or Tailwind CSS import

// Select the root element from index.html
const rootElement = document.getElementById('root');

if (rootElement) {
  // Create React DOM root and render App
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}