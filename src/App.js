import React from "react";
import styles from "./App.module.css";
//Component
import MainTemplate from "./components/MainTemplate";

function App() {
  return (
    <div
      className={styles.app}
    
      >
      <MainTemplate />
    </div>
  );
}

export default App;
