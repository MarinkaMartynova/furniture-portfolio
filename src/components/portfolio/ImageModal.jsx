import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <button onClick={onRequestClose} className="modal-close-button">
        {/* Close */}
        <i class="bx bx-x modal-close-button"></i>
      </button>
      <img src={image} alt="Work" className="modal-image" />
    </Modal>
  );
};

export default ImageModal;
