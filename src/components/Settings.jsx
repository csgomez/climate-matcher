import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentDifficulty,
  updateDifficulty,
} from '../reducers/citiesSlice';
import { useState } from 'react';
import { hideSettingsModal } from '../reducers/modalSlice';

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
    dispatch(hideSettingsModal());
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
          <option value="easy">Easy 7°F</option>
          <option value="medium">Medium 3°F</option>
          <option value="hard">Hard 1°F</option>
        </select>
      </section>
    </div>
  );
};

export default Settings;
