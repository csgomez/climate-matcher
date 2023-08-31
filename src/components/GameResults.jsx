import { useSelector } from 'react-redux';
import { selectAllCities } from '../reducers/citiesSlice';

const GameResults = () => {
  const cities = useSelector(selectAllCities);

  const temp1 = cities[1].data.temp;
  const temp2 = cities[2].data.temp;

  const difference = Math.abs(temp1 - temp2).toFixed(1);

  return (
    <div className="game-results">
      <p>
        <b>You were off by {difference} degrees!</b>
      </p>
    </div>
  );
};

export default GameResults;
