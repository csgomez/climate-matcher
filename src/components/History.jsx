import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import HistoryItem from './HistoryItem';

const History = () => {
  const { history } = useContext(GameContext);

  if (history.length === 0) return null;

  return (
    <div>
      {history.map((result) => (
        <HistoryItem key={result.moveNumber} result={result} />
      ))}
    </div>
  );
};

export default History;
