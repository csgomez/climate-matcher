const CityResults = ({ city, cityId }) => {
  if (!city.ready) return null;

  return (
    <div>
      <p>Temperature: {city.temp}</p>
      <p>
        Location: lat[<em>{city.location.lat}</em>] long[
        <em>{city.location.long}</em>]
      </p>{' '}
    </div>
  );
};

export default CityResults;
