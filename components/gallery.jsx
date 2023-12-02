import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from '../styles/gallery.module.css';

Modal.setAppElement('#__next');

const CustomGallery = ({ images }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const customGalleryItems = images.map((image, index) => ({
    original: image,
    thumbnail: `${image}?w=100&h=100&fit=crop`,
    description: `Image ${index + 1}`,
  }));

  const handleGalleryClick = (index) => {
    openModal(index);
  };

  return (
    <div className={styles.gallery_container}>
      {customGalleryItems.map((item, index) => (
        <div key={index} onClick={() => handleGalleryClick(index)}>
          <img src={item.thumbnail} alt={item.description} />
        </div>
    ))}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
      >
        <button onClick={closeModal}>❌</button>
        <img
          className={styles.ModalImage}
          src={customGalleryItems[selectedImageIndex]?.original}
          alt={`Image ${selectedImageIndex + 1}`}
        />
      </Modal>
    </div>
  );
};

export default CustomGallery;