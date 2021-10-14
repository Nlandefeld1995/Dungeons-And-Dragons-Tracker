import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./common/redux/store";
import 'bootstrap/dist/css/bootstrap.min.css';
const render = () => {
  const App = require("./App").default;

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};
render();
store.subscribe(render);
if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./App", render);
}
