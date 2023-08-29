import axios from 'axios';

const getLocationUrl = (locationName) =>
  `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
    locationName
  )}&format=json`;

const getWeatherUrl = (latitude, longitude) =>
  `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=fahrenheit`;

export const fetchLocation = async (locationName) => {
  const url = getLocationUrl(locationName);
  const response = await axios.get(url);

  const { lat, lon, display_name } = response.data[0];
  const longName = display_name.split(',');
  const country = longName[longName.length - 1].trim();

  return { lat, lon, country };
};

export const fetchWeather = async (latitude, longitude) => {
  const url = getWeatherUrl(latitude, longitude);
  const response = await axios.get(url);
  console.log(response);

  const { temperature, time } = response.data.current_weather;

  return { temperature, time };
};
