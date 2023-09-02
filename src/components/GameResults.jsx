import { useDispatch, useSelector } from 'react-redux';
import { resetGame, selectGameState } from '../reducers/citiesSlice';
import { hideGameEndingModal } from '../reducers/modalSlice';

const GameResults = () => {
  const dispatch = useDispatch();

  const { isWinner } = useSelector(selectGameState);

  const handlePlayAgain = () => {
    dispatch(resetGame());
    dispatch(hideGameEndingModal());
  };

  return (
    <div className="game-results-modal">
      <div className="game-results-modal-header">
        <h4>Results</h4>
        {/* <button>X</button> */}
      </div>
      <div className="game-results-modal-content">
        {isWinner ? (
          <p>Congratulations! You found a city with a similar temperature!</p>
        ) : (
          <p>Sorry, but {"that's"} game over</p>
        )}
        <div className="game-results-modal-playagain">
          <p>Play again?</p>
          <button onClick={handlePlayAgain}>Yes</button>
        </div>
      </div>
    </div>
  );
};

export default GameResults;
