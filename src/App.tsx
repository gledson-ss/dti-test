import React from "react";
import Navigaton from "./navigation";
import { Provider } from "react-redux";
import { store } from "./context/store";

export default function App() {
  return (
    <Provider store={store}>
      <Navigaton />
    </Provider>
  );
}
