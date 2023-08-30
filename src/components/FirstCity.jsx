import { useSelector } from 'react-redux';
import { selectFirstCity } from '../reducers/citiesSlice';

const FirstCity = () => {
  const city = useSelector(selectFirstCity);

  return (
    <div>
      <p>Choose the first city</p>
    </div>
  );
};

export default FirstCity;
