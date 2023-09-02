import { useDispatch, useSelector } from 'react-redux';
import { selectCityDataById, makeGuess } from '../reducers/citiesSlice';
import { useRef } from 'react';
import { fetchLocation, fetchWeather } from '../services/geoweather';

const City = ({ cityId }) => {
  const city = useSelector(selectCityDataById(cityId));
  const cityNameInputRef = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

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

      dispatch(makeGuess({ cityId, newCityData }));

      console.log(lat, lon, temperature);
    } catch (err) {
      console.error('Error fetching location or weather: ', err);
    }
  };

  return (
    <div className="city">
      <h3>Choose the {cityId === 1 ? 'first' : 'second'} city</h3>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Los Angeles, CA"
          ref={cityNameInputRef}
        />
        <button>Get Temp</button>
      </form>

      {city.ready && (
        <div className="city-results">
          <p>Temperature: {city.temp.toFixed(1)}F</p>
        </div>
      )}
    </div>
  );
};

export default City;
