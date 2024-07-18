import React, { useState } from 'react';
import Card from '../components/Card';

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

  const filteredProperties = property.filter((property) =>
    property.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-cyan-800 mb-6">
        Welcome to Our Real Estate Service
      </h1>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProperties.map((property) => (
          <Card
            key={property.id}
            name={property.name}
            image={imageMap[property.image]}
            price={property.price}
            location={property.location}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
