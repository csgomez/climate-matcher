import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

const GameResults = () => {
  const { firstCity, secondCity, gameCompleted } = useContext(GameContext);

  if (!gameCompleted) return null;

  const temp1 = parseFloat(firstCity.temp);
  const temp2 = parseFloat(secondCity.temp);

  const difference = Math.abs(temp2 - temp1).toFixed(1);

  return (
    <div>
      <p>You were off by {difference} degrees!</p>
    </div>
  );
};

export default GameResults;
