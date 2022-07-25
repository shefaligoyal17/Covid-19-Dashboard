import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import casesReducer from "./store/reducers/cases";
import countriesReducer from "./store/reducers/countries";
import searchReducer from "./store/reducers/search";
import mapReducer from "./store/reducers/map";
import chartsReducer from "./store/reducers/charts";
import newsReducer from "./store/reducers/news";
import twitterReducer from "./store/reducers/twitter";

const composeEnhancers =
  (process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;
const rootReducer = combineReducers({
  cases: casesReducer,
  countries: countriesReducer,
  search: searchReducer,
  map: mapReducer,
  charts: chartsReducer,
  news: newsReducer,
  twitter: twitterReducer,
});
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
