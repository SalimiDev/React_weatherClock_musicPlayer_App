import React, { useState, useContext } from "react";
import styles from "./MiniTime.module.css";
//Npm Packages
import { DateTime } from "luxon";
import Timezone from "countries-and-timezones";
//Weather Context
import { weatherContext } from "../context/ManageContext";

const MiniTime = () => {
  const [time, setTime] = useState();
  const { WeatherData } = useContext(weatherContext);
  const countryId = WeatherData?.sys?.country;
  const countryZone = Timezone.getCountry(countryId)?.timezones[0];
  const zoneTime = DateTime.now().setZone(countryZone);
  const { month, day, hour, minute, second } = zoneTime.c;
  const fullTime = `${month}/${day} - ${hour}:${minute}:${second}`;

  setTimeout(() => {
    setTime(fullTime);
  }, 1000);

  return (
    <div className={styles.miniTime}>
      <p>{time}</p>
    </div>
  );
};

export default MiniTime;


