import React, { useContext } from "react";
import styles from "./Weather.module.css";
//Dynamic background component
import { background } from "./background";
//Components
import MiniTime from "./MiniTime";
//Context
import { weatherContext } from "../context/ManageContext";

const Weather = (props) => {
  const { WeatherData } = useContext(weatherContext);
  const { city, temp, descrip } = props;
  return (
    <div className={styles.container}>
      <h1 className={styles.temp}>{temp}&deg;</h1>
      <div className={styles.cityTimeContainer}>
        <h2 className={styles.city}>{city}</h2>
        <MiniTime />
      </div>
      <div className={styles.iconContainer}>
        <img
          className={styles.weatherIcon}
          src={background(WeatherData).icon}
          alt="weather"
        />
        <h5>{descrip}</h5>
      </div>
    </div>
  );
};

export default Weather;
