
// LoadingPopup.jsx
import React from 'react';

const LoadingPopup = () => {
  return (
    <>
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-xl font-semibold">Loading...</p>
        </div>
        </div>
    </>
  );
};

export default LoadingPopup;
