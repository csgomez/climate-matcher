import { useSelector } from 'react-redux';
import { selectGuesses } from '../reducers/citiesSlice';

const GuessCounter = () => {
  const guesses = useSelector(selectGuesses);
  console.log('current guesses: ', guesses);

  return <div className="guess-counter">Guesses: {guesses}</div>;
};

export default GuessCounter;
