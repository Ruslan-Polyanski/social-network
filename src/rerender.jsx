import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { addDataPost } from "./Redux.jsx";
import { changeTextState } from "./Redux.jsx";


const root = ReactDOM.createRoot(document.getElementById('root'));

const reRender = (Redux) => {
    root.render(
      <React.StrictMode>
        <App addDataPost={addDataPost} changeTextState={changeTextState} dataTextArea={Redux.profile.dataTextArea} friends={Redux.sidebar.friends} navItem={Redux.navItem} dataPost={Redux.profile.dataPost} dataDialogs={Redux.messages.dataDialogs} dataText={Redux.profile.dataText}/>
      </React.StrictMode>
    );
  }

export default reRender;