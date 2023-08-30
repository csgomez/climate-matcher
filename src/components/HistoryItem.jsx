/* eslint-disable react/prop-types */
const HistoryItem = ({ result }) => {
  const temp1 = parseFloat(result.firstCity.temp);
  const temp2 = parseFloat(result.secondCity.temp);

  const difference = Math.abs(temp2 - temp1).toFixed(1);

  console.log('History result: ', result);

  return (
    <div style={{ border: '1px solid white' }}>
      {result.moveNumber} | {result.firstCity.name} ----{' '}
      {result.secondCity.name} === {difference}F
    </div>
  );
};

export default HistoryItem;
