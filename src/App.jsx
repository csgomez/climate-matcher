import './App.css';
import CityComponent from './components/CityComponent';
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
    <>
      <h1>City Climate Matcher</h1>
      <CityComponent cityId={1} />
      {isFirstCityReady && <CityComponent cityId={2} />}
      {areBothCitiesReady && <GameResults />}
      <History />
    </>
  );
}

export default App;
