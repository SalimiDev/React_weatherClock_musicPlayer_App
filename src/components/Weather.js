import React, { useContext } from "react";
import styles from "./Weather.module.css";
import { background } from "./background";
import { weatherContext } from "../context/ManageContext";

const Weather = (props) => {
  const { WeatherData } = useContext(weatherContext);
  const { city, temp, descrip } = props;
  return (
    <div className={styles.container}>
      <h1 className={styles.temp}>{temp}&deg;</h1>
      <div className={styles.cityClenderContainer}>
        <h2 className={styles.city}>{city}</h2>
        <div className={styles.clender}>Time and clender</div>
      </div>
      <div>
        <img
          className={styles.weatherIcon}
          src={background(WeatherData).icon}
          alt="weather"
          style={{ height: "55px" }}
        />
      </div>

      <div>{descrip}</div>
    </div>
  );
};

export default Weather;
