export const apiValidate = (WeatherData) => {
  const Errors = {};
  if (!WeatherData.cod) {
    Errors.status = "No results found.";
  } else {
    delete Errors.status;
  }

  return Errors;
};

const inputValidates = (StationData) => {
  const Error = {};

  if (!StationData.citySearch) {
    Error.citySearch = "Please enter the city name";
  } else {
    delete Error.citySearch;
  }

  return Error;
};

export { inputValidates };
