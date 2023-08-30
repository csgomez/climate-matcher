import './App.css';
import GameResults from './components/GameResults';
import History from './components/History';
import CityController from './components/CityController';
import { useSelector } from 'react-redux';
import { selectAreBothCitiesReady } from './reducers/citiesSlice';

function App() {
  const areBothCitiesReady = useSelector(selectAreBothCitiesReady);

  return (
    <>
      <h1>City Climate Matcher</h1>
      <CityController />
      <br />
      {areBothCitiesReady && <GameResults />}
      <br />
      <History />
    </>
  );
}

export default App;
