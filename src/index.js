import Redux, { subscribe, addDataPost, changeTextState} from './Redux.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const reRender = (state) => {
    root.render(
      <React.StrictMode>
        <App 
            addDataPost={addDataPost} 
            changeTextState={changeTextState} 
            dataTextArea={Redux.profile.dataTextArea} 
            friends={Redux.sidebar.friends} 
            navItem={Redux.navItem} 
            dataPost={Redux.profile.dataPost} 
            dataDialogs={Redux.messages.dataDialogs} 
            dataText={Redux.profile.dataText}
        />
      </React.StrictMode>
    );
  }

  reRender(Redux)

  subscribe(reRender)






