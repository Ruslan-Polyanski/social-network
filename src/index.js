import store  from './Redux.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const reRender = (state) => {
  root.render(
      <React.StrictMode>
        <App 
            addDataPost={store.addDataPost.bind(store)} 
            changeTextState={store.changeTextState.bind(store)} 
            dataTextArea={state.profile.dataTextArea} 
            friends={state.sidebar.friends} 
            navItem={state.navItem} 
            dataPost={state.profile.dataPost} 
            dataDialogs={state.messages.dataDialogs} 
            dataText={state.profile.dataText}
        />
      </React.StrictMode>
    );
  }

  reRender(store.getState())

  store.subscribe(reRender)






