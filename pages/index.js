import React, { Component } from "react";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
// import thunk from "redux-thunk";

import App from "../src/App";
import sandwichBuilderReducer from "../src/store/reducers/sandwichBuilderReducer";

// const composeEnhancers =
//   process.env.NODE_ENV === "development"
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : null || compose;

const rootReducer = combineReducers({
  sandwichBuilder: sandwichBuilderReducer
});

const store = createStore(
  rootReducer
  // composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

export default class index extends Component {
  render() {
    return app;
  }
}
