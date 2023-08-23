import React from 'react';

import Title from '../components/Title/Title';
import ServiceCards from '../components/ServiceCards/ServiceCards';
import ModalWindow from '../components/Modal/ModalWindow';

import '../App.css';

const StartPage = () => {
  return (
    <div className="main">
      <Title />
      <ServiceCards />
      <ModalWindow />
    </div>
  )
};

export default StartPage;