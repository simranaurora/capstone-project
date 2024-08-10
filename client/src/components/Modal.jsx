import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, property, imageMap }) => {
  if (!isOpen) return null;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.id === 'modal-overlay') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleClose = () => {
    onClose();
  };

  return ReactDOM.createPortal(
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-md w-full relative">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          style={{ fontSize: '2rem', padding: '0.5rem' }}
        >
          &times;
        </button>
        <img
          src={imageMap[property.image]}
          alt={property.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">{property.name}</h2>
          <p className="text-gray-600 mb-2">{property.price}</p>
          <p className="text-gray-600 mb-2">{property.location}</p>
          <p className="text-gray-800">{property.details}</p>
          <p className="text-gray-700">{property.description}</p>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
