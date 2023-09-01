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
    <>
      {isWinner ? (
        <p>Congratulations! You found a city with a similar temperature!</p>
      ) : (
        <p>Sorry, but {"that's"} game over</p>
      )}
      <p>Play again?</p>
      <button onClick={handlePlayAgain}>Yes</button>
    </>
  );
};

export default GameResults;
