import React from 'react';
import ReactDOM from 'react-dom/client';
import "@fontsource/montserrat"; 
import "@fontsource/dancing-script";
import './index.css';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

// import GetmenuheaderQuery from './query/index';
import persistor from './store' 
import { PersistGate } from 'redux-persist/integration/react'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter>

          <App />
          {/* <GetmenuheaderQuery/> */}

        </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
    
  </React.StrictMode>
 
);
reportWebVitals();
