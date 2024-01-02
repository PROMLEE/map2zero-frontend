import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { legacy_createStore } from "@reduxjs/toolkit";
import App from "./App";

import rootReducer from "./modules";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const store = legacy_createStore(rootReducer);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
