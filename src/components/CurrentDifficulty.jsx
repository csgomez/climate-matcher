import { useSelector } from 'react-redux';
import { selectCurrentDifficulty } from '../reducers/citiesSlice';

const CurrentDifficulty = () => {
  const difficulty = useSelector(selectCurrentDifficulty);
  const difficultyStyle = {
    fontSize: '1.5rem',
  };

  return (
    <div className="difficulty-info">
      {/* <span style={difficultyStyle}>Difficulty:</span> within {difficulty.value}
      °F */}
      Difficulty: {difficulty.value}°F
    </div>
  );
};

export default CurrentDifficulty;
