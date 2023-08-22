import React from 'react';

import i18next from '../../assets/i18next';

import "./ServiceCard.css"

const ServiceCard = (props) => {
  const { type } = props;
  return (
    <div className="serviceCard">
      <div className="content">
        <img
          src={`icons/${type}.png`}
          alt={i18next.t(`ServiceCards.${type}.alt`)}
          title={i18next.t(`ServiceCards.${type}.alt`)}
        />
        <h3>{i18next.t(`ServiceCards.${type}.title`)}</h3>
        <hr />
        <h4>{i18next.t(`ServiceCards.${type}.subtitle`)}</h4>
      </div>
    </div>
  )
};

export default ServiceCard;