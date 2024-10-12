// CardPlanSection.js
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import InfoCard from "./InfoCard";

const CardPlanSection = ({ infoCards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipeLeft = () => {
    if (currentIndex < infoCards.length - 2) {
      setCurrentIndex(currentIndex + 2);
    }
  };

  const handleSwipeRight = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 2);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
  });

  return (
    <div className="bg-pink-100 p-8 rounded-lg shadow-md mt-8" {...handlers}>
      <div className="flex space-x-6">
        {infoCards.slice(currentIndex, currentIndex + 2).map((card, index) => (
          <InfoCard key={index} title={card.title} description={card.description} />
        ))}
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        {currentIndex > 0 && (
          <button
            onClick={handleSwipeRight}
            className="px-4 py-2 bg-pink-500 text-white rounded-lg"
          >
            Previous
          </button>
        )}
        {currentIndex < infoCards.length - 2 && (
          <button
            onClick={handleSwipeLeft}
            className="px-4 py-2 bg-pink-500 text-white rounded-lg"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default CardPlanSection;
