import './App.css';
import City from './components/City';
import GameResults from './components/GameResults';
import History from './components/History';
import { useSelector } from 'react-redux';
import {
  selectIsFirstCityReady,
  selectAreBothCitiesReady,
} from './reducers/citiesSlice';

function App() {
  const isFirstCityReady = useSelector(selectIsFirstCityReady);
  const areBothCitiesReady = useSelector(selectAreBothCitiesReady);

  return (
    <main className="App">
      <h1>City Climate Matcher</h1>
      <City cityId={1} />
      {isFirstCityReady && <City cityId={2} />}
      {areBothCitiesReady && <GameResults />}
      <History />
    </main>
  );
}

export default App;
