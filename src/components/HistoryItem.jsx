/* eslint-disable react/prop-types */
const HistoryItem = ({ result }) => {
  const firstCityName = result.city1.name.split(',')[0];
  const secondCityName = result.city2.name.split(',')[0];

  const temp1 = parseFloat(result.city1.temp);
  const temp2 = parseFloat(result.city2.temp);

  const difference = Math.abs(temp2 - temp1).toFixed(1);

  console.log('city1:', result.city1);
  console.log('city2:', result.city2);
  return (
    <div>
      {result.moveNumber} | {firstCityName} ---- {secondCityName} ==={' '}
      {difference}F
    </div>
  );
};

export default HistoryItem;
