import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { addDataPost } from "./Redux.jsx";


const reRender = (Redux) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App addDataPost={addDataPost} friends={Redux.sidebar.friends} navItem={Redux.navItem} dataPost={Redux.dataPost} dataDialogs={Redux.dataDialogs} dataText={Redux.dataText}/>
      </React.StrictMode>
    );
  }

export default reRender;