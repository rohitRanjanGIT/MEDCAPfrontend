import React from 'react';
import { Carousel } from 'flowbite-react';
import "../custom-css/carousel.css"; // Ensure this CSS file is set up for styling

const CarouselSection = ({ items, title }) => {
  return (
    <div className="mb-8 text-left">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>

      <Carousel 
        className="h-60 bg-white rounded-lg shadow-lg transition duration-300" // Removed hover effect for better usability
        leftControlClassName="carousel-control"
        rightControlClassName="carousel-control"
        indicatorsColor="text-pink-600"
        slideToShow={1} // Display one slide at a time
        interval={5000} // Optional: automatic sliding interval
      >
        {items.map((item, index) => (
          <div key={index} className="flex flex-col p-4 px-6">
            <div className='flex items-center mb-2'>
              {item.icon && <div className="text-3xl bg-pink-100 h-12 w-12 flex items-center justify-center rounded-full mr-3">{item.icon}</div>}
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselSection;