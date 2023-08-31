import { useSelector } from 'react-redux';
import { selectGuesses } from '../reducers/citiesSlice';

const GuessCounter = () => {
  const guesses = useSelector(selectGuesses);

  return <div className="guess-counter">Guesses: {guesses}</div>;
};

export default GuessCounter;
