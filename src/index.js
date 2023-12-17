import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import Loading from "./Components/Loading/Loading";
import { Store } from "./Redux/Store";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
      <ToastContainer/>
        <App />
        <Loading />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
