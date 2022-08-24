import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Dashboard from "./Dashboard";

const App1Container = React.lazy(() => import("app1/App1Container"));
const App2Container = React.lazy(() => import("app2/App2Container"));

const App = () => {
  return (
    <React.Suspense fallback={"Loading..."}>
      <Provider store={store}>
        <Dashboard />
        <div style={{ display: "flex", gap: 2 }}>
          <label style={{ fontWeight: "600" }}>Remote App1 Value:</label>
          <App1Container store={store} />
        </div>
        <div style={{ display: "flex" }}>
          <label style={{ fontWeight: "600" }}>Remote App1 Value:</label>
          <App2Container store={store} />
        </div>
      </Provider>
    </React.Suspense>
  );
};

export default App;
