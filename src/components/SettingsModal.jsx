import Modal from 'react-modal';
import Settings from './Settings';
import { useSelector } from 'react-redux';
import { selectIsModalOpen } from '../reducers/modalSlice';

Modal.setAppElement('#root');

const SettingsModal = () => {
  // const [showModal, setShowModal] = useState(false);
  const isModalOpen = useSelector(selectIsModalOpen);

  return (
    <Modal
      isOpen={isModalOpen}
      className="modal-content"
      style={{
        content: {
          width: '300px',
          height: '200px',
          margin: 'auto',
          paddin: 0,
          display: 'flex',
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
      <Settings />
    </Modal>
  );
};

export default SettingsModal;
