import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.module.css";

const App = React.createElement("h1", { className: styles.hello }, "Hello World");

const root = document.getElementById("root");

ReactDOM.render(App, root);
