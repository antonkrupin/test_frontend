import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';
import i18next from '../../assets/i18next';

import { setModalOpen } from '../../slices/mainReducer';

import './Button.css'

const Button = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { text, styling, id } = props;
  const test = () => {
    if (id === "enterBtn" && location.pathname === "/") {
      /* if (location.pathname !== '/userAccount') {
        navigate('/userAccount');
      } else {
        navigate('/');
      } */
      dispatch(setModalOpen());
    } else {
      navigate('/contacts')
    }
  }
  return (
    <button
      className={styling}
      onClick={test}
    >
        {i18next.t(`${text}`)}
    </button>
  )
};

export default Button;