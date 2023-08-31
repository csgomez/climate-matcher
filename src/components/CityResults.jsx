const CityResults = ({ city }) => {
  if (!city.ready) return null;

  console.log('citydata:', city);
  return (
    <div className="city-results">
      <p>Temperature: {city.temp.toFixed(1)}F</p>
    </div>
  );
};

export default CityResults;
