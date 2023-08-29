import { useState } from 'react';
import axios from 'axios';

const useGeolocation = () => {
  const [geolocation, setGeolocation] = useState({
    latitude: '',
    longitude: '',
  });
  const [weather, setWeather] = useState({ temperature: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getLocationUrl = (location) =>
    `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
      location
    )}&format=json`;
  const weatherUrl = (longitude, latitude) =>
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=fahrenheit`;

  const fetchGeolocation = async (location) => {
    console.log('Fetching geolocation....');
    setLoading(true);
    try {
      const url = getLocationUrl(location);
      const response = await axios.get(url);
      const data = response.data;

      console.log(response);

      if (data.length > 0) {
        const latitude = data[0].lat;
        const longitude = data[0].lon;
        setGeolocation({ latitude, longitude });

        /* Extra stuff for weather (should be in a useEffect) */
        const weatherResponse = await axios.get(
          weatherUrl(longitude, latitude)
        );

        console.log(weatherResponse);
        setWeather({
          temperature:
            weatherResponse.data.current_weather.temperature.toString(),
          latitude,
          longitude,
        });
        setError('');
      } else {
        throw new Error('Error getting weather from location');
      }
    } catch (error) {
      console.error('Error:', error);
      setGeolocation(null);
      setError('Error getting weather.');
    } finally {
      setLoading(false);
    }
  };

  return { geolocation, loading, error, weather, fetchGeolocation };
};

export default useGeolocation;
