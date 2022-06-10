import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import Login from './login'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='g-signin'>
      <Login />
    </div>
   </React.StrictMode>
);


