import "./index.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import React from "react";
import App from "@/App";
import { store } from "@/store/store";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      closeOnClick
      pauseOnHover
      draggable
    />
  </Provider>
);