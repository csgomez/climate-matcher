import './App.css';
import City from './components/City';
import GameResults from './components/GameResults';
import History from './components/History';
import { useSelector } from 'react-redux';
import { selectAreBothCitiesReady } from './reducers/citiesSlice';
import GuessCounter from './components/Guesses';

function App() {
  const areBothCitiesReady = useSelector(selectAreBothCitiesReady);

  return (
    <main className="App">
      <h1>City Climate Matcher</h1>
      <GuessCounter />
      <City cityId={1} />
      <City cityId={2} />
      {/* {isFirstCityReady && <City cityId={2} />} */}
      {areBothCitiesReady && <GameResults />}
      <History />
    </main>
  );
}

export default App;
