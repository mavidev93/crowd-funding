/** @format */
//@type-
import { Web3Storage } from "web3.storage/dist/bundle.esm.min.js";

import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import { StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "web3uikit";
const container = document.getElementById("root")!;
const root = createRoot(container);

// const initializeOnMount = process.env.REACT_APP_INITIALIZE_ON_MOUNT;
//
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <BrowserRouter>
          <MoralisProvider
            // appId={
            //   initializeOnMount
            //     ? "txwSNFvYMJatNCbSfFhN6itj95eCyeSqNx2E7RCz"
            //     : ""
            // }
            // serverUrl={
            //   initializeOnMount
            //     ? "https://db8q9dzv8fdo.usemoralis.com:2053/server"
            //     : ""
            // }
            initializeOnMount={false}
          >
            <NotificationProvider>
              <App />
            </NotificationProvider>
          </MoralisProvider>
        </BrowserRouter>
      </Provider>
    </StyledEngineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
