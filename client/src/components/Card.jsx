import React from 'react';

const Card = ({ name, image, price, location }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-gray-600 mb-2">{price}</p>
        <p className="text-gray-600">{location}</p>
      </div>
    </div>
  );
};

export default Card;
