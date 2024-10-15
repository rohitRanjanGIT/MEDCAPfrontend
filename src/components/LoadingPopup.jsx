import React from 'react';
import { XCircleIcon } from '@heroicons/react/solid'; // Import an error icon (you can use any icon library or your own SVG)
import '../custom-css/loader.css';

const LoadingPopup = ({ message = "Loading...", error = false }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      {/* Invisible SVG filter definition for gooey effect */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="12"></feGaussianBlur>
          <feColorMatrix
            values="0 0 0 0 1 
                    0 0 0 0 0.5 
                    0 0 0 0 0.5 
                    0 0 0 48 -7"
          ></feColorMatrix>
        </filter>
      </svg>

      {/* Loader or Error */}
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-80 h-80 flex flex-col items-center justify-center">
        {error ? (
          // Error animation or icon
          <XCircleIcon className="h-16 w-16 text-red-500 mb-4" /> // Using HeroIcons as an example
        ) : (
          // Loader animation if no error
          <div className="loader"></div>
        )}
        {/* Show either loading or error message */}
        <p className="text-xl mt-4">{message}</p>
      </div>
    </div>
  );
};

export default LoadingPopup;
