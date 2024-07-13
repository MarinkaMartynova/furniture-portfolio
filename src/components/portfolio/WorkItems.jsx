import React, { useState } from "react";
import ImageModal from "./ImageModal";

const WorkItems = ({ item }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      {/* <a href="#" className="work__button">
        Посмотреть работу{" "}
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a> */}

      <button onClick={openModal} className="work__button">
        Посмотреть работу{" "}
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </button>
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        image={item.image}
      />
    </div>
  );
};

export default WorkItems;
