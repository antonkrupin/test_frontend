import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

import './ServiceCards.css'

const ServiceCards = () => {
  return (
    <div className="serviceCards">
      <ServiceCard title="Онлайнприем" />
      <ServiceCard title="Онлайнприем" />
      <ServiceCard title="Онлайнприем" />
    </div>
  )
};

export default ServiceCards;