import City from './City';
import GameResults from './GameResults';
import History from './History';
import { useSelector } from 'react-redux';
import {
  selectAreBothCitiesReady,
  selectIsFirstCityReady,
} from '../reducers/citiesSlice';
import GuessCounter from './Guesses';
import GameStatus from './GameStatus';

const Game = () => {
  const isFirstCityReady = useSelector(selectIsFirstCityReady);
  const areBothCitiesReady = useSelector(selectAreBothCitiesReady);

  return (
    <main className="App">
      <GuessCounter />
      <City cityId={1} />
      {isFirstCityReady && <City cityId={2} />}
      {areBothCitiesReady && <GameResults />}
      <GameStatus />
      <History />
    </main>
  );
};

export default Game;
