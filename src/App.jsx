import React from "react";
import { Provider } from "react-redux";
import Layout from "./component/Layout";
import store from "./redux/store";
import "./index.css";

const App = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

export default App;
