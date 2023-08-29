import { useContext } from 'react';
import { fetchLocation, fetchWeather } from '../services/geoweather';
import { GameContext } from '../contexts/GameContext';

/* eslint-disable react/prop-types */
const City = ({ city, setCity, isSecondCity = false }) => {
  const { firstCity, secondCity, pushHistory } = useContext(GameContext);
  const { name, temp, location } = city;

  const setCityReady = (value) => {
    setCity((prev) => ({ ...prev, ready: value }));
  };

  const setCityLocation = (lat, long) => {
    setCity((prev) => ({ ...prev, location: { lat, long } }));
  };

  const setCityWeather = (temperature) => {
    setCity((prev) => ({ ...prev, temp: temperature }));
  };

  const handleNameChange = (e) => {
    setCity((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { lat, lon } = await fetchLocation(name);
      const { temperature } = await fetchWeather(lat, lon);

      setCityLocation(lat, lon);
      setCityWeather(temperature);

      // conditionally push a history item (if other city is already set)
      // TODO:  just have pushHistory accesss first/secondCity in the context file
      //        and refactor to just `pushHistory()`
      if (isSecondCity && firstCity.ready) {
        pushHistory(firstCity, secondCity);
      } else if (!isSecondCity && secondCity.ready) {
        pushHistory(firstCity, secondCity);
      }

      setCityReady(true);
    } catch (err) {
      console.error('Error getting weather/location:', err);
    }
  };

  return (
    <div>
      <p>Choose the {isSecondCity ? 'second' : 'first'} city</p>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" value={name} onChange={handleNameChange} />
        <button>Get Temp</button>
      </form>

      {city.ready && (
        <div>
          <p>Temperature: {temp}</p>
          <p>
            Location: lat[<em>{location.lat}</em>] long[<em>{location.long}</em>
            ]
          </p>
        </div>
      )}
    </div>
  );
};

export default City;
