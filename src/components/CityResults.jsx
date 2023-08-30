const CityResults = ({ city }) => {
  if (!city.ready) return null;

  return (
    <div>
      <p>Temperature: {city.temp}</p>
      <p>
        Location: lat[<em>{city.location.lat}</em>] long[
        <em>{city.location.lon}</em>]
      </p>{' '}
    </div>
  );
};

export default CityResults;
