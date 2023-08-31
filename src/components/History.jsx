import HistoryItem from './HistoryItem';
import { useSelector } from 'react-redux';
import { selectHistory } from '../reducers/citiesSlice';

const History = () => {
  const history = useSelector(selectHistory);
  const isEmpty = history.length === 0;

  return (
    <div className="history">
      <h3>Past Plays</h3>
      {isEmpty && <p>No plays yet...</p>}
      <table>
        <tbody>
          {history.map((result) => (
            <HistoryItem key={result.moveNumber} result={result} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
