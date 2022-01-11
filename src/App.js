import React, { useContext } from "react";
import styles from "./App.module.css";
import { background } from "./components/background";
//Context
import { weatherContext } from "./context/ManageContext";

//Component
import MainTemplate from "./components/MainTemplate";

function App() {
  const { WeatherData } = useContext(weatherContext);

  return (
    <div
      className={styles.app}
      style={{
        backgroundImage: `url(${background(WeatherData).city})`,
      }}
      >
      <MainTemplate />
    </div>
  );
}

export default App;
