import store  from './components/redux/reduxStore.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
// import StoreContext from './StoreContext';
// import { Provider } from './StoreContext';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
const reRender = (state) => {
  root.render(
        <BrowserRouter>
              <React.StrictMode>
              <Provider store={store}>                  
                <App friends={state.sidebar.friends} navItem={state.navItem} />
              </Provider>
              </React.StrictMode>
        </BrowserRouter>
    );
  }

  reRender(store.getState())

  store.subscribe(() => {
    const state = store.getState();
    reRender(state)
  })






