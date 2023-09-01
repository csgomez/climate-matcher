import City from './City';
import MoveResult from './MoveResult';
import History from './History';
import { useSelector } from 'react-redux';
import {
  selectAreBothCitiesReady,
  selectIsFirstCityReady,
} from '../reducers/citiesSlice';
import GuessCounter from './Guesses';
import GameEndingModal from './GameEndingModal';

const Game = () => {
  const isFirstCityReady = useSelector(selectIsFirstCityReady);
  const areBothCitiesReady = useSelector(selectAreBothCitiesReady);

  return (
    <main className="App">
      <GuessCounter />
      <City cityId={1} />
      {isFirstCityReady && <City cityId={2} />}
      {areBothCitiesReady && <MoveResult />}
      <GameEndingModal />
      <History />
    </main>
  );
};

export default Game;
