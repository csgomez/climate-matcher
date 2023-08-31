import { useDispatch, useSelector } from 'react-redux';
import {
  selectDifficulty,
  selectHistory,
  selectGuesses,
  resetGame,
} from '../reducers/citiesSlice';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const GameStatus = () => {
  const difficulty = useSelector(selectDifficulty);
  const guessCount = useSelector(selectGuesses);
  const guesses = useSelector(selectHistory);
  const isWinner = guesses[guesses.length - 1]?.difference <= difficulty;

  const dispatch = useDispatch();

  const playAgainButton = () => (
    <div>
      Play again? <button onClick={() => dispatch(resetGame())}>Yes</button>
    </div>
  );

  return (
    <Modal
      isOpen={isWinner || guessCount === 5}
      className="modal-content"
      style={{
        content: {
          width: '300px',
          height: '200px',
          margin: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgb(31 31 31)',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.808)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      {isWinner && (
        <>
          <p>Congratulations! You found a city with a similar temperature!</p>
          {playAgainButton()}
        </>
      )}
      {!isWinner && guessCount === 5 && (
        <>
          <p>Sorry, but {"that's"} game over</p>
          {playAgainButton()}
        </>
      )}
    </Modal>
  );
};

export default GameStatus;
