import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {
  Web3ReactProvider,
  // useWeb3React,
  // UnsupportedChainIdError
} from "@web3-react/core";
import { ToastContainer } from 'material-react-toastify';
// Import Redux
import { Provider } from 'react-redux';
import store from 'redux/storeConfig/store'
import { CookiesProvider } from "react-cookie";
import { getLibrary } from 'utils/web3React';
import App from 'App';
import 'material-react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </BrowserRouter>
    </Provider>
  </Web3ReactProvider>,
  document.getElementById('root')
);