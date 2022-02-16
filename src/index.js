import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.module.css";

const App = () => {
  return <h1 className={styles.hello}>Hello World</h1>;
};

const root = document.getElementById("root");

ReactDOM.render(<App />, root);
