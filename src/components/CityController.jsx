import { useSelector } from 'react-redux';
import CityComponent from './CityComponent';
import { selectIsFirstCityReady } from '../reducers/citiesSlice';

const CityController = () => {
  const isFirstCityReady = useSelector(selectIsFirstCityReady);

  if (!isFirstCityReady) {
    return <CityComponent cityId={1} />;
  }

  return (
    <>
      <CityComponent cityId={1} />
      <CityComponent cityId={2} />
    </>
  );
};

export default CityController;
