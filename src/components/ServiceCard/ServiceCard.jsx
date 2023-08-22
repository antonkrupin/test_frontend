import React from 'react';
import "./ServiceCard.css"

const ServiceCard = (props) => {
  const { title } = props;
  return (
    <div className="serviceCard">
      <div className="content">
        <img src="icons/cancer.png" alt="test"/>
        <h3>{ title }</h3>
        <hr />
        <h4>Lorem ipsum dolor sit amet.</h4>
      </div>
    </div>
  )
};

export default ServiceCard;