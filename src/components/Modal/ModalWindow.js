import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Modal from 'react-modal';
import { fetchIsModalOpen } from '../../slices/selectors';
import { setModalOpen } from '../../slices/mainReducer';

const ModalWindow = (props) => {
  const isOpen = useSelector(fetchIsModalOpen);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(setModalOpen());
  };

  const modalContent = (
    <div>
      <h2>Заголовок модального окна</h2>
      <p>Текст модального окна</p>
      <button onClick={() => dispatch(setModalOpen())}>Закрыть</button>
    </div>
  );

  return (
    <div>
      <Modal isOpen={isOpen} onRequestClose={closeModal} ariaHideApp={false}>
        {modalContent}
      </Modal>
    </div>
  );
};

export default ModalWindow;