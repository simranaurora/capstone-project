import React from 'react';
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

const Home = () => {
  const houseImages = [
    house1, house2, house3, house4, house5, house6, house7, house8, house9, house10
  ];

  return (
    <div className="container mx-auto p-4">
    <h1 className="text-4xl font-bold text-center text-cyan-800 mb-6">
      Welcome to Our Real Estate Service
    </h1>
      
      <div className="grid grid-cols-2 gap-4">
        {houseImages.map((image, index) => (
          <img key={index} src={image} alt={`House ${index + 1}`} className="w-full h-auto" />
        ))}
      </div>
    </div>
  );
};

export default Home;
