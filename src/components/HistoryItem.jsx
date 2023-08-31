/* eslint-disable react/prop-types */
const HistoryItem = ({ result }) => {
  const moveNumber = result.moveNumber;

  const name1 = result.firstCity.name;
  const name2 = result.secondCity.name;

  const difference = result.difference;

  console.log('History result: ', result);

  return (
    <tr>
      <td>{moveNumber}</td>
      <td>{name1}</td>
      <td>{name2}</td>
      <td>{difference.toFixed(1)} F</td>
    </tr>
  );
};

export default HistoryItem;
