import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { Image, ModalBackdrop, ModalContent } from './Modal.styled';
// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     padding: '0px',
//   },
// };

Modal.setAppElement('#root');

const ImageModal = ({ largeImageUrl, tags, isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image modal"
      className="_"
      overlayClassName="_"
      contentElement={(props, children) => (
        <ModalContent {...props}>{children}</ModalContent>
      )}
      overlayElement={(props, contentElement) => (
        <ModalBackdrop {...props}>{contentElement}</ModalBackdrop>
      )}
    >
      <div>
        <Image src={largeImageUrl} alt={tags} />
      </div>
    </Modal>
  );
};

ImageModal.propTypes = {
  largeImageUrl: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default ImageModal;
