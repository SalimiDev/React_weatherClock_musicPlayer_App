import React from "react";
import styles from "./Weather.module.css";

const Weather = (props) => {
  const { city, temp, descrip,icon } = props;
  return (
    <div className={styles.container}>
      <h1 className={styles.temp}>{temp}&deg;</h1>
      <div className={styles.cityClenderContainer}>
        <h2 className={styles.city}>{city}</h2>
        <div className={styles.clender}>Time and clender</div>
      </div>
      <div>
        {icon}
      </div>

      <div>{descrip}</div>
    </div>
  );
};

export default Weather;
