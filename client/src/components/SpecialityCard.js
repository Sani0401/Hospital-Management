import React from 'react';
import Button from 'react-bootstrap/Button';
import "./specialityCard.css";

function SpecialityCard({ title, image, description }) {
  return (
    <>
      <div className='mainCardContainer'>
        <h3 className='specialityTitle'>{title}</h3>
        <div className='imageContainer'>
        <img src={image} className='image' alt={title} />
        </div>
       
        <p className='specialityDescription'>{description}</p>
        <Button variant="outline-primary" className='specialityButton' >Login</Button>
      </div>
    </>
  );
}

export default SpecialityCard;
