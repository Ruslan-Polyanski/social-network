import store  from './components/redux/reduxStore.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import StoreContext from './StoreContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
const reRender = (state) => {
  root.render(
      <StoreContext.Provider value={store}>
        <BrowserRouter>
              <React.StrictMode>
                <App friends={state.sidebar.friends} navItem={state.navItem} />
              </React.StrictMode>
        </BrowserRouter>
      </StoreContext.Provider>
    );
  }

  reRender(store.getState())

  store.subscribe(() => {
    const state = store.getState();
    reRender(state)
  })






