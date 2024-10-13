import React from 'react';
import image from '../assets/aboutIMG.png'

const About = () => {
  return (
    <section className="bg-[#fbcfe8] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">About Us</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Discover the Faces Behind Our Mental Health Consultancy</h3>
            <p className="text-lg md:text-xl mb-6">
              At MedCap, we're dedicated to providing personalized mental health care. Our team of experienced professionals is committed to helping you achieve optimal wellbeing and live life to the fullest.
            </p>
            <button className="bg-pink-400 text-white px-6 py-3 rounded-full text-lg w-full md:w-auto">
              Learn More
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
              <img 
                src={image} 
                alt="MedCap Team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;