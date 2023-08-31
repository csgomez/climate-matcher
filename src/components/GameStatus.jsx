import { useSelector } from 'react-redux';
import {
  selectDifficulty,
  selectHistory,
  selectGuesses,
} from '../reducers/citiesSlice';

const GameStatus = () => {
  const difficulty = useSelector(selectDifficulty);
  const guessCount = useSelector(selectGuesses);
  const guesses = useSelector(selectHistory);

  const isWinner = guesses[guesses.length - 1].difference <= difficulty;

  return (
    <div>
      {isWinner && (
        <p>Congratulations! You found a city with a similar temperature!</p>
      )}
      {!isWinner && guessCount === 5 && <p>Sorry, but that&aposs game over</p>}
    </div>
  );
};

export default GameStatus;
