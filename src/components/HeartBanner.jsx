import React from 'react';
import { FaHeartbeat, FaUserMd, FaAppleAlt } from 'react-icons/fa'; // Import icons
import "../custom-css/HeartBanner.css"

const HealthSection = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 py-8 relative overflow-hidden">
      {/* Background Heartbeat Animation */}
      <div className="absolute inset-0 opacity-30">
        <svg viewBox="0 0 100 100" className="h-full w-full animate-pulse">
          <path
            fill="none"
            stroke="white"
            strokeWidth="2"
            d="M 0 50 L 20 30 L 40 60 L 60 40 L 80 70 L 100 50"
          />
        </svg>
      </div>
      <div className="container mx-auto pt-8 px-4 md:px-12 flex flex-col md:flex-row justify-between text-white text-center">
        <div className="mb-4 md:mb-0">
          <FaHeartbeat className="text-4xl mb-2" />
          <div className="text-3xl font-bold">Healthy Heart</div>
          <div>Keep your heart in shape!</div>
        </div>
        <div className="mb-4 md:mb-0">
          <FaUserMd className="text-4xl mb-2" />
          <div className="text-3xl font-bold">Expert Advice</div>
          <div>Consult with health professionals</div>
        </div>
        <div className="mb-4 md:mb-0">
          <FaAppleAlt className="text-4xl mb-2" />
          <div className="text-3xl font-bold">Nutrition</div>
          <div>Eat healthy, stay healthy!</div>
        </div>
      </div>
    </div>
  );
};

export default HealthSection;
