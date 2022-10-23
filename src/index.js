import store  from './components/redux/reduxStore.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
        <React.StrictMode>
        <Provider store={store}>                  
          <App friends={store.getState().sidebar.friends} navItem={store.getState().navItem} />
        </Provider>
        </React.StrictMode>
  </BrowserRouter>
);










