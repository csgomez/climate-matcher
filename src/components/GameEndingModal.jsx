import { useSelector } from 'react-redux';
import Modal from 'react-modal';
import { selectIsGameEndingModalOpen } from '../reducers/modalSlice';
import GameResults from './GameResults';

Modal.setAppElement('#root');

const GameEndingModal = () => {
  const isModalOpen = useSelector(selectIsGameEndingModalOpen);

  return (
    <Modal
      isOpen={isModalOpen}
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
          border: '4px solid #ffffff33',
          borderRadius: '3px',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.808)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <GameResults />
    </Modal>
  );
};

export default GameEndingModal;
