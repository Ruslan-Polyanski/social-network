import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Redux from './Redux.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App navItem={Redux.navItem} dataPost={Redux.dataPost} dataDialogs={Redux.dataDialogs} dataText={Redux.dataText}/>
  </React.StrictMode>
);

