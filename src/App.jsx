import { useContext } from 'react';
import './App.css';
import City from './components/City';
import { GameContext } from './contexts/GameContext';
import GameResults from './components/GameResults';
import History from './components/History';
import CityComponent from './components/CityComponent';

function App() {
  const { firstCity, setFirstCity, secondCity, setSecondCity, gameCompleted } =
    useContext(GameContext);

  return (
    <>
      <h1>City Climate Matcher</h1>
      <City city={firstCity} setCity={setFirstCity} />
      <br />
      {firstCity.ready && (
        <City city={secondCity} setCity={setSecondCity} isSecondCity />
      )}
      <br />
      {gameCompleted && <GameResults />}
      <br />
      <History />
    </>
  );
}

export default App;
