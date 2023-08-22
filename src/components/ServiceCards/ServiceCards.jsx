import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

import './ServiceCards.css'

const ServiceCards = () => {
  return (
    <div className="serviceCards">
      <ServiceCard type="online" />
      <ServiceCard type="emergency" />
      <ServiceCard type="cancer" />
    </div>
  )
};

export default ServiceCards;