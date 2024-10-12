// InfoCard.js
import React from "react";

const InfoCard = ({ title, description }) => {
  return (
    <div className="bg-pink-200 p-6 rounded-lg shadow-lg flex flex-col items-start">
      <h3 className="text-2xl font-semibold text-pink-800 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default InfoCard;
