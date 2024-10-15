import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ onClose, title, children }) => {
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose(); // Close the modal if the overlay is clicked
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick} // Add click event to overlay
    >
      <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          ✖
        </button>
        <div className="max-h-80 overflow-y-auto p-6">{children}</div> {/* Added scrollable area */}
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
