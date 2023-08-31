const CityResults = ({ city }) => {
  if (!city.ready) return null;

  return (
    <div className="city-results">
      <p>Temperature: {city.temp.toFixed(1)}F</p>
      {/* <p>
        Location: lat[<em>{city.location.lat}</em>] long[
        <em>{city.location.lon}</em>]
      </p>{' '} */}
    </div>
  );
};

export default CityResults;
