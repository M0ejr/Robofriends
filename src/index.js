import React from "react";
import { createRoot } from "react-dom/client";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import "tachyons";
import App from "./containers/App.tsx";
import registerServiceWorker from "./registerServiceWorker";
import { requestRobots, searchRobots } from "./reducers";
import "./index.css";
import { thunk } from "redux-thunk";

const rootReducers = combineReducers({ requestRobots, searchRobots });
const store = createStore(rootReducers, applyMiddleware(thunk));

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

registerServiceWorker();
