import React, { useContext, useEffect, useState } from "react";
import styles from "./MainTemplate.module.css";
import { Icon } from "@iconify/react";
import { background } from "./background";
//Validation
import { inputValidates } from "../validate/validate";

//Components
import Weather from "./Weather";
import AnalogClock from "./AnalogClock";

//Weather Context
import { weatherContext } from "../context/ManageContext";

const MainTemplate = () => {

  const [Error, setError] = useState({});
  const { WeatherData, setWeatherData, Errors } = useContext(weatherContext);
  const [StationData, setStationData] = useState({});
  useEffect(() => {
    setStationData({
      cod: WeatherData.cod,
      citySearch: "",
      city: WeatherData.name,
      temp: Math.floor(WeatherData.main?.temp - 273.15),
      icon: Array.isArray(WeatherData.weather) && WeatherData.weather[0].icon,
      descrip:
        Array.isArray(WeatherData.weather) &&
        WeatherData.weather[0].description,
    });
  }, [WeatherData]);

  const searchHandler = (event) => {
    setStationData({
      ...StationData,
      citySearch: [event.target.value],
    });
  };

  const clickHandler = async (event) => {
    event.preventDefault();
    setWeatherData({ cityName: citySearch });
    setError(inputValidates(StationData));
  };

  const { city, temp, icon, descrip, citySearch } = StationData;

  return (
    <div>
      <div
        className={styles.mainContainer}
        style={{
          backgroundImage: `url(${background(WeatherData).city})`,
        }}>
        <div className={styles.clockWeatherContainer}>
          <div className={styles.analogClock}><AnalogClock/></div>

          <div className={styles.weather}>
            <Weather
              city={city}
              temp={temp & temp}
              icon={icon}
              descrip={descrip}
            />
          </div>
          <p>{StationData.errorMassage}</p>
          <div className={styles.inputContainer}>
            <p>{Errors.city && Errors.city}</p>
            <p>{Errors.status}</p>

            <p>{Error.citySearch && Error.citySearch}</p>

            <input
              className={styles.searchBox}
              type="text"
              name="citySearch"
              value={citySearch}
              onChange={searchHandler}
            />
            <button className={styles.searchButton} onClick={clickHandler}>
              <Icon icon="fluent:globe-search-24-filled" />
            </button>
          </div>
        </div>

        <div className={styles.musicAppContainer}>MusicApp</div>
      </div>
    </div>
  );
};

export default MainTemplate;
