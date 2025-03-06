import React from 'react';

const Card = ({ image, name, hobbies, gender, address }) => {
    return (
        <div className="card">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p><strong>Hobbies:</strong> {hobbies}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Address:</strong> {address}</p>
        </div>
    );
};

export default Card;