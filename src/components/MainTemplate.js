import React, { useContext, useEffect, useState } from "react";
import styles from "./MainTemplate.module.css";
import { Icon } from "@iconify/react";
import { background } from "./background";
//Validation
import { ToastContainer } from "react-toastify";
import { notify } from "./toast";
import "react-toastify/dist/ReactToastify.css";
//Components
import Weather from "./Weather";
import AnalogClock from "./AnalogClock";
import PlayerApp from "./playerApp/PlayerApp";
//Weather Context
import { weatherContext } from "../context/ManageContext";

const MainTemplate = () => {
  const { WeatherData, setWeatherData } = useContext(weatherContext);
  const [StationData, setStationData] = useState({});
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    setStationData({
      cod: WeatherData.cod,
      city: WeatherData.name,
      temp: Math.floor(WeatherData.main?.temp - 273.15),
      icon: Array.isArray(WeatherData.weather) && WeatherData.weather[0].icon,
      descrip:
        Array.isArray(WeatherData.weather) &&
        WeatherData.weather[0].description,
    });
  }, [WeatherData]);

  const searchClickHandler = (e) => {
    e.preventDefault();
    if (searchInput) {
      setWeatherData({ cityName: searchInput });
    } else {
      notify("error", "Please enter the city name");
    }
  };
  // Destructure for conciseness
  const { city, temp, icon, descrip } = StationData;

  return (
    <div>
      <div
        className={styles.mainContainer}
        style={{
          backgroundImage: `url(${background(WeatherData).city})`,
        }}>
        <div className={styles.clockWeatherContainer}>
          <div className={styles.analogClock}>
            <AnalogClock />
          </div>

          <div className={styles.weather}>
            <Weather
              city={city}
              temp={temp & temp}
              icon={icon}
              descrip={descrip}
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              className={styles.searchBox}
              type="text"
              name="citySearch"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && searchClickHandler(e)}
            />
            <button
              className={styles.searchButton}
              onClick={searchClickHandler}>
              <Icon icon="fluent:globe-search-24-filled" />
            </button>
          </div>
        </div>

        <div className={styles.musicAppContainer}>
          <PlayerApp />
        </div>
      </div>
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default MainTemplate;
