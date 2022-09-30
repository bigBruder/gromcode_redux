import { getData } from './weather.gateway';

export const WEATHER_DATA_RECEIVED = 'WEATHER_DATA_RECEIVED';

export const weatherDataReceived = weatherData => ({
  type: WEATHER_DATA_RECEIVED,
  payload: {
    weatherData,
  },
});

export const getWeatherData = () =>
  function (dispatch) {
    getData().then(weatherData => {
      dispatch(weatherDataReceived(weatherData));
    });
  };
