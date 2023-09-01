import Modal from 'react-modal';
import Settings from './Settings';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal, selectIsModalOpen } from '../reducers/modalSlice';

Modal.setAppElement('#root');

const SettingsModal = () => {
  const dispatch = useDispatch();

  const isModalOpen = useSelector(selectIsModalOpen);

  const handleCloseModal = () => {
    dispatch(hideModal());
  };

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
      shouldCloseOnOverlayClick={true}
      onRequestClose={handleCloseModal}
    >
      <Settings />
    </Modal>
  );
};

export default SettingsModal;
