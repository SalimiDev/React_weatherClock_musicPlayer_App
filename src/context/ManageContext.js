import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { apiValidate } from "../validate/validate";

//Export the Weather Information Using Context.
export const weatherContext = createContext();

const ManageContext = (props) => {
  const [Errors, setErrors] = useState({});

  const [WeatherData, setWeatherData] = useState({
    cityName: "Tehran",
  });

  //Weather API
  const API = {
    BASE_URL: ` https://api.openweathermap.org/data/2.5/weather?q=${WeatherData.cityName}`,
    apiKey: "d438c9f45d83a507eb098737aa8e8bea",
  };

  if (WeatherData.cityName) {
    const getWeather = async () => {
      const response = await axios.get(`${API.BASE_URL}&appid=${API.apiKey}`);

      return response.data;
    };
    getWeather();
    const fetchAPI = async () => {
      setWeatherData(await getWeather());
    };
    fetchAPI();
  }
  useEffect(() => {
    setErrors(apiValidate(WeatherData));
  }, [WeatherData]);

  return (
    <weatherContext.Provider value={{ WeatherData, setWeatherData, Errors }}>
      {props.children}
    </weatherContext.Provider>
  );
};

export default ManageContext;
