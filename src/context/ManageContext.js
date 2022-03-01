import React, { createContext, useState } from "react";
import axios from "axios";
//Export the Weather Information Using Context.
export const weatherContext = createContext();

const ManageContext = (props) => {
  const [WeatherData, setWeatherData] = useState({
    cityName: "Tehran",
    cod: 200,
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
  return (
    <weatherContext.Provider
      value={{
        WeatherData,
        setWeatherData,
      }}>
      {props.children}
    </weatherContext.Provider>
  );
};

export default ManageContext;
