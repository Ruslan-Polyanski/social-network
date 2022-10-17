import store  from './components/redux/Redux.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const reRender = (state) => {
  root.render(
      <React.StrictMode>
        <App 
            dispatch={store.dispatch.bind(store)}
            dataTextArea={state.profile.dataTextArea} 
            friends={state.sidebar.friends} 
            navItem={state.navItem} 
            dataPost={state.profile.dataPost} 
            dataDialogs={state.messages.dataDialogs} 
            dataText={state.messages.dataText}
            dataContentTextArea={state.messages.dataContentTextArea}
        />
      </React.StrictMode>
    );
  }

  reRender(store.getState())

  store.subscribe(reRender)






