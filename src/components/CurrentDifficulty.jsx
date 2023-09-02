import { useSelector } from 'react-redux';
import { selectCurrentDifficulty } from '../reducers/citiesSlice';

const CurrentDifficulty = () => {
  const difficulty = useSelector(selectCurrentDifficulty);

  return (
    <div className="difficulty-info">Difficulty: {difficulty.value}°F</div>
  );
};

export default CurrentDifficulty;
