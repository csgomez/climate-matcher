import { useDispatch } from 'react-redux';
import { showModal } from '../reducers/modalSlice';

const SettingsButton = () => {
  const dispatch = useDispatch();

  return (
    <button className="settings-button" onClick={() => dispatch(showModal())}>
      Settings
    </button>
  );
};

export default SettingsButton;
