import { useDispatch } from 'react-redux';
import { showSettingsModal } from '../reducers/modalSlice';

const SettingsButton = () => {
  const dispatch = useDispatch();

  return (
    <button
      className="settings-button"
      onClick={() => dispatch(showSettingsModal())}
    >
      Settings
    </button>
  );
};

export default SettingsButton;
