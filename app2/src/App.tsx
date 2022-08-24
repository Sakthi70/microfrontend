import React from "react";
import { Provider } from "react-redux";
import RemoteAppWrapper from "./components/App2Container";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <RemoteAppWrapper store={store} />
  </Provider>
);

export default App;
