import React from "react";
import {hot} from "react-hot-loader";

import Test from './graphPlot';
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1> Hello, new World! </h1>
      <Test width="800" height="600" />
    </div>
  );
}

export default hot(module)(App);
