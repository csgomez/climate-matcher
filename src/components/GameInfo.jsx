import CurrentDifficulty from './CurrentDifficulty';
import GuessCounter from './Guesses';

const GameInfo = () => {
  return (
    <div className="game-info">
      <CurrentDifficulty />
      <GuessCounter />
    </div>
  );
};

export default GameInfo;
