import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import i18next from '../../assets/i18next';

import{
  fetchError,
  fetchIsModalOpen,
  fetchUsers
} from '../../slices/selectors';
import {
  setModalOpen,
  setUsers,
  setAuthorizedUser,
  setError,
  setIsAuthorized
} from '../../slices/mainReducer';

import './ModalWindow.css';

const ModalWindow = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formRef = useRef();

  const isOpen = useSelector(fetchIsModalOpen);
  const users = useSelector(fetchUsers);
  const error = useSelector(fetchError);

  useEffect(() => {
    const loadUsersList = async () => {
      const response = await fetch('./users.json');
      const responseData = await response.json();
      dispatch(setUsers(responseData));
    }
    loadUsersList();
  }, [dispatch]);

  const closeModalHandler = () => {
    dispatch(setModalOpen());
    dispatch(setError());
  }

  const authorization = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const login = formData.get('login');
    const password = formData.get('password');
    if (users[login] !== undefined) {
      if (users[login].password === password) {
        navigate('/userAccount');
        dispatch(setAuthorizedUser([users[login].name]))
        dispatch(setModalOpen());
        dispatch(setIsAuthorized());
        dispatch(setError());
      } else {
        if (password.length < 8) {
          dispatch(setError(i18next.t('validationErrors.passwordLength')));
        } else {
          dispatch(setError(i18next.t('validationErrors.wrongPassword')));
        }
      }
    } else {
      dispatch(setError(i18next.t('validationErrors.userDosentExist')));
    }
  }

  const modalContent = (
    <div>
      <button onClick={closeModalHandler} className="closeButton">x</button>
      <form onSubmit={authorization} ref={formRef}>
        <div className="modalForm">
          <input
            name="login"
            type="text"
            placeholder="Введите логин"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Введите пароль"
            required
          />
          <div className="error">{error}</div>
          <button className="enterButton">Войти</button>
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <Modal className="modal" overlayClassName="overlay" isOpen={isOpen} onRequestClose={closeModalHandler} ariaHideApp={false}>
        {modalContent}
      </Modal>
    </div>
  );
};

export default ModalWindow;