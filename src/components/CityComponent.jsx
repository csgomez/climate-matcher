import { useDispatch, useSelector } from 'react-redux';
import {
  getCitySelectorById,
  updateFirstCity,
  updateSecondCity,
} from '../reducers/citiesSlice';
import { useRef } from 'react';
import { fetchLocation, fetchWeather } from '../services/geoweather';
import CityResults from './CityResults';

const CityComponent = ({ cityId }) => {
  const selector = getCitySelectorById(cityId);
  const city = useSelector(selector);
  const cityNameInputRef = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Current name:', cityNameInputRef.current.value);
    console.log('city:', city);

    const cityName = cityNameInputRef.current.value;
    if (cityName === '' || cityName === city.name) return;

    try {
      const { lat, lon } = await fetchLocation(cityName);
      const { temperature } = await fetchWeather(lat, lon);

      const newCityData = {
        name: cityName,
        temp: temperature,
        location: {
          lat,
          lon,
        },
        ready: true,
      };
      if (cityId === 1) {
        dispatch(updateFirstCity(newCityData));
      } else if (cityId === 2) {
        dispatch(updateSecondCity(newCityData));
      }

      console.log(lat, lon, temperature);
    } catch (err) {
      console.error('Error fetching location or weather: ', err);
    }
  };

  return (
    <div>
      <p>Choose the {cityId === 1 ? 'first' : 'second'} city</p>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" ref={cityNameInputRef} />
        <button>Get Temp</button>
      </form>
      <CityResults city={city} />
    </div>
  );
};

export default CityComponent;
