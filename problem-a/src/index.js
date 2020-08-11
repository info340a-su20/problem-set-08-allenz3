import React from 'react';
import ReactDOM from 'react-dom';

//render the App component here!
import { App } from "./App";
import senators from "./senators";
console.log("here");
ReactDOM.render(<App senators/>, document.getElementById("root"));