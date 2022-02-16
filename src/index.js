import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = React.createElement("h1", { className: "hello" }, "Hello World");

const root = document.getElementById("root");

ReactDOM.render(App, root);
