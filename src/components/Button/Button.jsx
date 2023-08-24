import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';
import i18next from '../../assets/i18next';

import { setModalOpen, setIsAuthorized } from '../../slices/mainReducer';

import './Button.css'

const Button = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { text, styling, id } = props;
  const buttonHandler = () => {
    const pathName = location.pathname;
    switch(pathName) {
      case '/': {
        if (id === "enterBtn") {
          dispatch(setModalOpen());
        }
        if (id === "contactsBtn") {
          navigate('/contacts');
        }
        break;
      }
      case '/userAccount': {
        if (id === "contactsBtn") {
          navigate('/contacts');
        }
        if (id === "enterBtn") {
          navigate('/');
          dispatch(setIsAuthorized());
        }
        break;
      }
      default: {
        break;
      }
    }
  }
  return (
    <button
      className={styling}
      onClick={buttonHandler}
    >
        {i18next.t(`${text}`)}
    </button>
  )
};

export default Button;