import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentDifficulty,
  updateDifficulty,
} from '../reducers/citiesSlice';
import { useState } from 'react';
import { hideModal } from '../reducers/modalSlice';

const Settings = () => {
  const dispatch = useDispatch();

  const currentDifficulty = useSelector(selectCurrentDifficulty);
  const [selectedDifficulty, setSelectedDifficulty] = useState(
    currentDifficulty.name
  );

  // TODO: Determine what happens if difficulty is changed during play (maybe disable it or reset it?)
  const handleDifficultyChange = (e) => {
    setSelectedDifficulty(e.target.value);
    dispatch(updateDifficulty(e.target.value));
  };

  const handleCloseClick = () => {
    dispatch(hideModal());
    console.log('Close the modal, bro');
  };

  return (
    <div className="settings">
      <div className="settings-header">
        <h4>Settings</h4>
        <button onClick={handleCloseClick}>X</button>
      </div>
      <section className="settings-items">
        <label htmlFor="difficulty-select">Difficulty:</label>
        <select
          name="difficulty"
          id="difficulty-select"
          value={selectedDifficulty}
          onChange={handleDifficultyChange}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </section>
    </div>
  );
};

export default Settings;
