import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> // 이거 때문에 log가 두 번씩 나옴
    <App />
  // </React.StrictMode>
);

