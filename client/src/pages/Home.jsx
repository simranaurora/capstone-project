import React, { useState } from 'react';
import Card from '../components/Card';
import Modal from '../components/Modal';

import house1 from '../images/1.jpg';
import house2 from '../images/2.jpg';
import house3 from '../images/3.jpg';
import house4 from '../images/4.jpg';
import house5 from '../images/5.jpg';
import house6 from '../images/6.jpg';
import house7 from '../images/7.jpg';
import house8 from '../images/8.jpg';
import house9 from '../images/9.jpg';
import house10 from '../images/10.jpg';

import property from '../data';

const imageMap = {
  '1.jpg': house1,
  '2.jpg': house2,
  '3.jpg': house3,
  '4.jpg': house4,
  '5.jpg': house5,
  '6.jpg': house6,
  '7.jpg': house7,
  '8.jpg': house8,
  '9.jpg': house9,
  '10.jpg': house10
};

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // Default to ascending
  const [selectedProperty, setSelectedProperty] = useState(null);

  const filteredProperties = property
    .filter((prop) => prop.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
      const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
      return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
    });

  const handleCardClick = (property) => {
    setSelectedProperty(property);
  };

  const handleCloseModal = () => {
    setSelectedProperty(null);
  };

  const handleSortOrderChange = (order) => {
    setSortOrder(order);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-cyan-800 mb-6">
        Welcome to Our Real Estate Service
      </h1>
      <div className="mb-6 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 p-2 border border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        <div className="ml-4">
          <select
            value={sortOrder}
            onChange={(e) => handleSortOrderChange(e.target.value)}
            className="p-2 border border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProperties.map((property) => (
          <Card
            key={property.id}
            name={property.name}
            image={imageMap[property.image]}
            price={property.price}
            location={property.location}
            onClick={() => handleCardClick(property)}
          />
        ))}
      </div>

      {selectedProperty && (
        <Modal
          isOpen={!!selectedProperty}
          onClose={handleCloseModal}
          property={selectedProperty}
          imageMap={imageMap}
        />
      )}
    </div>
  );
};

export default Home;
