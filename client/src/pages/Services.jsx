import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Property Listings',
      description: 'Browse through our extensive listings of properties available for sale or rent. We provide detailed information and high-quality images for each property to help you make an informed decision.',
      icon: '🏡',
    },
    {
      title: 'Mortgage Calculator',
      description: 'Calculate your mortgage payments with our easy-to-use mortgage calculator, tailored to Canadian taxes and interest rates. Get a clear understanding of your monthly payments before making a decision.',
      icon: '💰',
    },
    {
      title: 'Virtual Tours',
      description: 'Take a virtual tour of properties from the comfort of your home. Our high-definition 3D tours give you a realistic view of the property, making it easier to shortlist your favorites.',
      icon: '🎥',
    },
    {
      title: 'Real Estate Consultation',
      description: 'Get expert advice from our experienced real estate agents. Whether you are buying, selling, or renting, our team is here to guide you through every step of the process.',
      icon: '💼',
    },
    {
      title: 'Neighborhood Insights',
      description: 'Learn more about the neighborhoods you are interested in. Our platform provides you with detailed information on schools, amenities, safety, and more to help you choose the right location.',
      icon: '📍',
    },
    {
      title: 'Legal Assistance',
      description: 'Our legal experts can help you with all the paperwork and legal requirements involved in buying or selling a property. We ensure a smooth and hassle-free transaction.',
      icon: '⚖️',
    },
  ];

  return (
    <div className='bg-gray-100 min-h-screen py-10'>
      <div className='max-w-6xl mx-auto text-center mb-10'>
        <h1 className='text-5xl font-bold text-cyan-700'>Our Services</h1>
        <p className='text-lg text-gray-700 mt-4'>We offer a wide range of services to help you with all your real estate needs.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto'>
        {services.map((service, index) => (
          <div key={index} className='bg-white shadow-lg rounded-lg p-6'>
            <div className='text-5xl'>{service.icon}</div>
            <h2 className='text-2xl font-bold mt-4 mb-2'>{service.title}</h2>
            <p className='text-gray-600'>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
