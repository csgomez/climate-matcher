import HistoryItem from './HistoryItem';
import { useSelector } from 'react-redux';
import { selectHistory } from '../reducers/citiesSlice';

const History = () => {
  // const { history } = useContext(GameContext);
  const history = useSelector(selectHistory);
  const isEmpty = history.length === 0;

  return (
    <div style={{ borderTop: '1px solid white', marginTop: '3rem' }}>
      <h3>Past Plays</h3>
      {isEmpty && <p>No plays yet...</p>}
      {history.map((result) => (
        <HistoryItem key={result.moveNumber} result={result} />
      ))}
    </div>
  );
};

export default History;
